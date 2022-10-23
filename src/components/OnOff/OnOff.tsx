import React from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


function OnOff(props: OnOffPropsType) {


    // стили
    const onStyle = {
        border: '1px solid black',
        width: '30px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'gray'

    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'gray' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    //

    //перерисовка стиля при клике при помощи useState
    return (
        <div>
            {/*<button>On</button>*/}
            {/*<button>Off</button>*/}
            <span style={onStyle} onClick={() => { props.onChange(true)}}>On</span>
            <span style={offStyle} onClick={() => { props.onChange(false)}}>Off</span>
            <span style={indicatorStyle}></span>
        </div>
    )
}

export default OnOff;
