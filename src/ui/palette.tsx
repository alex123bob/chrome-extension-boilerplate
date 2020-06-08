import * as colorjoe from 'colorjoe/dist/colorjoe'
import * as _ from "lodash"
import * as React from "react"
import * as ReactDOM from "react-dom"
import {withRouter, Link} from 'react-router-dom'

export default class Palette extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        displayMsg: ''
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
        return (
            <div>
                <Link to="/">
                    HOME
                </Link>
                <div id="palette">
                    
                </div>
                <p className="display">{this.state.displayMsg}</p>
            </div>
        )
    }

    componentDidMount() {
        let me = this
        const joe = colorjoe.rgb('palette', '#113c38', [
            'close',
            'currentColor',
            ['fields', {space: 'RGB', limit: 255, fix: 2}],
            'hex',
            'text',
            ['text', {text: 'param demo'}]
        ]).on('change', _.debounce(color => {
            chrome.storage.sync.set({color: color.hex()})
            me.setState({
                displayMsg: `color is set to ${color.hex()}`
            })
        }, 200))

        chrome.storage.sync.get(['color'], res => {
            joe.set(res.color)
        })
    }
}