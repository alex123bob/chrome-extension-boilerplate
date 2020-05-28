import * as React from "react"
import * as ReactDOM from "react-dom"
import { DefectFields } from '../app/constants'

import "../styles/popup.scss"

type MyProps = {}

type MyState = {
    themeColors: Array<string>,
    displayMsg: string
}

class App extends React.Component<MyProps, MyState> {

    constructor (props) {
        super(props)
        this.state = {
            themeColors: ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#5596e6', '#3d70b2', 
            '#41d6c3', '#42b0e2', '#261e1e', '#b7714b', '#FF8C94', '#2F9599', '#594F4F',
            '#A7226E', '#EC2049', '#F26B38', '#F7DB4F', '#355C7D', '#A8A7A7'],
            displayMsg: 'Choose a different background color!'
        }
    }

    handleFieldCheckChange = (evt) => {
        const input = evt.target
        const name = input.name
        let obj = {}
        obj[name] = input.checked
        this.setState(obj)
        chrome.storage.sync.get(['DefectFields'], res => {
            let updateObj
            if (!res) {
                updateObj = {
                    DefectFields: obj
                }
            }
            else {
                updateObj = {
                    DefectFields: {
                        ...res.DefectFields,
                        ...obj
                    }
                }
            }
            chrome.storage.sync.set(updateObj)
        })
    }

    themeBtnClick(color) {
        let me = this
        chrome.storage.sync.set({ color: color }, function () {
            me.setState({
                displayMsg: `color is ${color}`
            })
        })
    }

    resetColor = () => {
        let me = this
        chrome.storage.sync.set({ color: '' }, function () {
            me.setState({
                displayMsg: `color is reset`
            })
        })
    }

    render() {
        const {themeColors} = this.state
        return (
            <div className="ct">
                <div className="configuration popup-padded">
                    <div className="title">Field Configuration</div>
                    {
                        DefectFields.map((cfg, index) => {
                            return (
                                <div className="field" key={`${cfg.key}-${index}`}>
                                    <label className={cfg.configurable ? '' : 'disabled'}>
                                        {cfg['key']}:
                                        <input
                                            name={cfg.key}
                                            type="checkbox"
                                            checked={cfg.required || !!this.state[cfg.key]}
                                            disabled={!cfg.configurable}
                                            onChange={this.handleFieldCheckChange}
                                        />
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="theme">
                    {themeColors.map((color, index) => {
                        return <button key={index} onClick={this.themeBtnClick.bind(this, color)} style={{backgroundColor: color}}></button>
                    })}
                    <p className="display">{this.state.displayMsg}</p>
                    <button onClick={this.resetColor} className="reset">Reset Color</button>
                </div>
            </div>
        )
    }

    componentDidMount() {
        chrome.storage.sync.get(['DefectFields'], res => {
            const dfs = res.DefectFields
            console.log(dfs)
            this.setState(dfs)
        })
    }
}

// --------------

ReactDOM.render(
    <App />,
    document.getElementById('root')
)