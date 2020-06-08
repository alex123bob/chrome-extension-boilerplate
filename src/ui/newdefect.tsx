import * as colorjoe from 'colorjoe/dist/colorjoe'
import * as _ from "lodash"
import * as React from "react"
import { DefectFields } from '../app/constants'
import {withRouter, Link} from 'react-router-dom'
import * as ReactDOM from "react-dom"
import "../styles/newdefect.scss"

export default class NewDefect extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
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
            <div className="ct">
                <Link to="/">
                    HOME
                </Link>
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
            </div>
        )
    }

    componentDidMount() {
        chrome.storage.sync.get(['DefectFields'], res => {
            const dfs = res.DefectFields
            // console.log(dfs)
            this.setState(dfs)
        })
    }
}