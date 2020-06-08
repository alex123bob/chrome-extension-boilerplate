import * as React from "react"
import * as ReactDOM from "react-dom"
import { Switch, Route, Redirect } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'
import Palette from './palette'

import Menu from './menu'
import NewDefect from './newdefect'
import "../../node_modules/colorjoe/css/colorjoe.css"
import "../styles/popup.scss"

type PopupProps = {}

type PopupStates = {
}

class App extends React.Component<PopupProps, PopupStates> {

    constructor (props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Menu}/>
                        {/* <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/> */}
                        {/* <PrivateRoute path="/app" dispatch={this.props.dispatch} component={LayoutComponent}/> */}
                        {/* <Route path="/documentation" exact
                            render={() => <Redirect to="/documentation/getting-started/overview"/>}/> */}
                        {/* <Route path="/documentation" component={DocumentationLayoutComponent}/> */}
                        {/* <Route path="/register" exact component={Register}/> */}
                        {/* <Route path="/login" exact component={Login}/> */}
                        <Route path="/newdefect" exact component={NewDefect} />
                        <Route path="/palette" exact component={Palette}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }

    componentDidMount() {
    }
}

// --------------

ReactDOM.render(
    <App />,
    document.getElementById('root')
)