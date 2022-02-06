import React, {useState} from "react";
import {ModernCard} from "../components/Styles";
import Story from '@site/static/img/demos/story.svg';

export default function IssueSummary({summary = "Summary"}) {

    const [iSummary,setISummary] = useState(summary);

    return (
        <ModernCard>

            {summary}
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <div style={{height: 16, width: 16, marginRight: 5}}><Story />
                </div>

                <div style={{margin: 'auto', width: '90%'}}> <a
                    rel="noreferrer"
                    target="_blank">SP-2</a>
                    &nbsp;
                </div>
                <div></div>
            </div>
        </ModernCard>
    )

}