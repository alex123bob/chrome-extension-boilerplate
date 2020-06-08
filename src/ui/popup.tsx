import * as React from "react"
import * as ReactDOM from "react-dom"
import { Switch, Route, Redirect } from 'react-router'
import { HashRouter, Link } from 'react-router-dom'


import Menu from './menu'
import "../styles/popup.scss"

type PopupProps = {}

type PopupStates = {
}
const PrivateRoute = ({component, ...rest }) => {

    // for login authentication
    const isAuthenticated: boolean = false
    if (isAuthenticated) {
        // dispatch(logoutUser())
        return (<Redirect to="/login"/>)
    } else {
        return ( // eslint-disable-line
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        );
    }
};

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
                        <Route path="/" exact render={() => <Redirect to="/app/newdefect"/>}/>
                        {/* <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/> */}
                        <PrivateRoute path="/app" component={Menu}/>
                        {/* <Route path="/documentation" exact
                            render={() => <Redirect to="/documentation/getting-started/overview"/>}/> */}
                        {/* <Route path="/documentation" component={DocumentationLayoutComponent}/> */}
                        {/* <Route path="/register" exact component={Register}/> */}
                        {/* <Route path="/login" exact component={Login}/> */}
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