import React, {useState} from 'react'
import { Tooltip } from 'reactstrap'
import "../styles/case.scss"

const Case = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const toggle = () => setTooltipOpen(!tooltipOpen)

    const gotoTS = () => {
        // location.href=props.link
    }

    return <div id={props.caseId} className="case" onClick={gotoTS}>
        <div>{props.caseId} : {props.name}</div>
        &nbsp;
        <div>{props.owner}</div>
        <Tooltip className="tp" autohide={false} placement="top" isOpen={tooltipOpen} target={props.caseId} toggle={toggle}>
            <div dangerouslySetInnerHTML={{__html: props.desc}}>
            </div>
        </Tooltip>
    </div>
}


export default Case