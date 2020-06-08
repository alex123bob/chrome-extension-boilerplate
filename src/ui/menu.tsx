import * as React from 'react'
import {withRouter, Link} from 'react-router-dom'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/palette">
                    <button>Palette</button>
                </Link>
                <p></p>
                <Link to="/newdefect">
                    <button>New Defect Fields Cfg</button>
                </Link>
            </div>
        )
    }
}