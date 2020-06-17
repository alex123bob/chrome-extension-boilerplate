import * as _ from "lodash"
import * as React from "react"
// import { DefectFields } from '../app/constants'
import {withRouter, Link} from 'react-router-dom'
import * as ReactDOM from "react-dom"
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
            return <div className="ts" key={idx}>
                <div>{idx}</div>
                &nbsp;
                <div>{c['TESECASE Owner']}</div>
                &nbsp;
                <div>{c['TESTCASE Id']}</div>
                <br />
                <div>{c['TESTCASE Name']}</div>
                {/* <br /> */}
                {/* <div>{c['TESTCASE Description']}</div> */}
            </div>
        }) : <div>no ts</div>
    }

    render() {
        return (
            <div className="configuration defect-box-padding">
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