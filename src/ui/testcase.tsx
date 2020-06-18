import * as _ from "lodash"
import * as React from "react"
// import { DefectFields } from '../app/constants'
import {withRouter, Link} from 'react-router-dom'
import * as ReactDOM from "react-dom"
import Case from './case'

import "../styles/testcase.scss"

type NewDefectProps = {
    displayMsg: Function
}

export default class TestCase extends React.Component<NewDefectProps> {
    constructor(props) {
        super(props)
    }

    state = {
        testCases: []
    }

    renderCases(cases) {
        return cases && cases.length > 0 ? cases.map((c, idx) => {
            return <Case link={c['TESTCASE Link']} key={idx} name={c['TESTCASE Name']} owner={c['TESTCASE Owner']} caseId={c['TESTCASE Id']} desc={c['TESTCASE Description']} />
        }) : <div>no ts</div>
    }

    render() {
        return (
            <div className="testcase">
                {
                    this.renderCases(this.state.testCases)
                }
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:3000/testcase').then(res => res.json()).then(res => {
            this.setState({
                testCases: res
            })
        })
    }
}