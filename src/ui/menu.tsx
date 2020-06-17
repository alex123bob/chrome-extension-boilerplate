import * as React from 'react'
import { Switch, Route } from 'react-router';
import {withRouter, Link} from 'react-router-dom'
import Palette from './palette'
import NewDefect from './newdefect'
import TestCase from './testcase'
import {Fade, Toast, ToastHeader, ToastBody, Row, Col} from 'reactstrap'
import * as toastr from "toastr"

import 'bootstrap/dist/css/bootstrap.css'
import "../styles/menu.scss"

type MenuProps = {
    history: Object,
    match: Object,
    location: {
        pathname: String
    }
}

let timerId = -1

class Menu extends React.Component<MenuProps> {
    constructor(props) {
        super(props)
    }

    state = {
        isOpen: false,
        msg: {
            title: '',
            body: '',
            type: 'primary'
        },
    }

    displayMsg = (msg) => {
        clearTimeout(timerId)
        this.setState({
            msg,
            isOpen: true
        }, () => {
            timerId = window.setTimeout(() => {
                this.setState({isOpen: false})
            }, 1500)
        })
    }

    getSelectCls = (pathname) => this.props.location.pathname === pathname ? 'selected' : 'unselected'

    render() {
        return (
            <div>
                <header></header>
                <div className="global-toast p-3 my-2 rounded bg-docs-transparent-grid">
                    <Toast isOpen={this.state.isOpen}>
                        <ToastHeader icon={this.state.msg.type || 'primary'}>
                            {this.state.msg.title}
                        </ToastHeader>
                        <ToastBody>
                            {this.state.msg.body}
                        </ToastBody>
                    </Toast>
                </div>
                <div className="section">
                    <div className="sidebar">
                        <Link className={this.getSelectCls('/app/newdefect')} to="/app/newdefect">
                            New Defect
                        </Link>
                        <Link className={this.getSelectCls('/app/palette')}  to="/app/palette">
                            Palette
                        </Link>
                        <Link className={this.getSelectCls('/app/testcase')}  to="/app/testcase">
                            Test Cases
                        </Link>
                    </div>

                    <div className="content">
                        <Switch>
                            <Route path="/app/newdefect" exact render={() => {
                                return <NewDefect displayMsg={this.displayMsg} />
                            }} />
                            <Route path="/app/palette" exact render={() => {
                                return <Palette displayMsg={this.displayMsg} />
                            }} />
                            <Route path="/app/testcase" exact render={() => {
                                return <TestCase displayMsg={this.displayMsg} />
                            }} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        
    }
}

export default withRouter(Menu)