import React from "react";

type OnOffPropsType = {
    on: boolean
}


function OnOff(props: OnOffPropsType) {
    // стили
    const onStyle = {
        border: '1px solid black',
        width: '30px',
    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black'
    }
    //

    return (
        <div>
            {/*<button>On</button>*/}
            {/*<button>Off</button>*/}
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;
