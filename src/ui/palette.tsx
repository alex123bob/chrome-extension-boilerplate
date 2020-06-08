import * as colorjoe from 'colorjoe/dist/colorjoe'
import * as _ from "lodash"
import * as React from "react"
import * as ReactDOM from "react-dom"
import {withRouter, Link} from 'react-router-dom'
import "../../node_modules/colorjoe/css/colorjoe.css"
import "../styles/palette.scss"

type PaletteProps = {
    displayMsg: Function
}

export default class Palette extends React.Component<PaletteProps> {
    constructor(props) {
        super(props)
    }

    state = {
        displayMsg: ''
    }

    resetColor = () => {
        let me = this
        chrome.storage.sync.set({ color: '' }, function () {
            this.props.displayMsg({
                title: 'Rest Colour',
                body: 'Color is reset',
                type: 'success'
            })
            // me.setState({
            //     displayMsg: `color is reset`
            // })
        })
    }

    render() {
        return (
            <div>
                <div id="palette">
                    
                </div>
                <p className="display">{this.state.displayMsg}</p>
            </div>
        )
    }

    componentDidMount() {
        chrome.storage.sync.get(['color'], res => {
            colorjoe.rgb('palette', res.color, [
                'close',
                'currentColor',
                ['fields', {space: 'RGB', limit: 255, fix: 2}],
                'hex',
                'text',
                ['text', {text: 'param demo'}]
            ]).on('change', _.debounce(color => {
                chrome.storage.sync.set({color: color.hex()})
                this.props.displayMsg({
                    title: 'Colour setting',
                    body: `color is set to ${color.hex()}`,
                    type: 'success'
                })
            }, 200))
        })
    }
}