import * as React from "react"
import * as ReactDOM from "react-dom"
import { DefectFields } from '../app/constants'

import "../styles/popup.scss"

class App extends React.Component {

    constructor (props) {
        super(props)
        this.state = {}
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

    render() {
        return (
            <div className="configurationCt popup-padded">
                <div className="title">Field Configuration</div>
                {
                    DefectFields.map((cfg, index) => {
                        return (
                            <div className="field">
                                <label className={cfg.configurable ? '' : 'disabled'} key={`${cfg.key}-${index}`}>
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