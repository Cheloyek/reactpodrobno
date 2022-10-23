import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
}


function UncontrolledOnOff(props: OnOffPropsType) {

    //хук
    let [on, setOn] = useState(false)

    // стили
    const onStyle = {
        border: '1px solid black',
        width: '30px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'gray'

    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'gray' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    //


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    //перерисовка стиля при клике при помощи useState
    return (
        <div>
            {/*<button>On</button>*/}
            {/*<button>Off</button>*/}
            <span style={onStyle} onClick={onClicked}>On</span>
            <span style={offStyle} onClick={offClicked}>Off</span>
            <span style={indicatorStyle}></span>
        </div>
    )
}

export default UncontrolledOnOff;
