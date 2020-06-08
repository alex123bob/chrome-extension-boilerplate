import * as React from 'react'
import { Switch, Route } from 'react-router';
import {withRouter, Link} from 'react-router-dom'
import Palette from './palette'
import NewDefect from './newdefect'
import {Row, Col} from 'reactstrap'
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

class Menu extends React.Component<MenuProps> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="sidebar" lg={2} md={2}>
                        <Link className={this.props.location.pathname === '/app/newdefect' ? 'selected' : 'unselected'} to="/app/newdefect">
                            New Defect
                        </Link>
                        <Link className={this.props.location.pathname === '/app/palette' ? 'selected' : 'unselected'}  to="/app/palette">
                            Palette
                        </Link>
                    </Col>

                    <Col lg={10} md={10}>
                        <Switch>
                            <Route path="/app/newdefect" exact component={NewDefect} />
                            <Route path="/app/palette" exact component={Palette} />
                        </Switch>
                    </Col>
                </Row>
            </div>
        )
    }

    componentDidMount() {
        
    }
}

export default withRouter(Menu)