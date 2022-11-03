import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export type AccordionPropsType = {
    titleValue: string,
}

//     if (action.type === TOGGLE_CONSTANT) {
//         return !state
//     }
//     return state
// }


//снаружи не передается то, что контролирует его состояние
//collapsed - если true не покажет AccordionBody {props.collapsed === false && <AccordionBody/>}
function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
        //неконтролируемый, значение передается через useState, при нажатии развернет/свернет меню
        //в AccordionTitle передали onClick который вызывает функцию () => {setCollapsed(!collapsed)}
        //AccordionTitle через props.onClick при нажатии вызывает функцию () => {setCollapsed(!collapsed)}
    // let [collapsed, setCollapsed] = useState(true)
        // [имя, dispatch] = useReducer(функция в которую нужно передать, стартовое значение - если false меню не будет развернуто до нажатия, если true то будет развернуто до нажатия)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
        return <div>
            {/*<AccordionTitle titleValue={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/> /!*передает полученный из app через props в AccordionTitle*!/*/}
            <AccordionTitle titleValue={props.titleValue} onClick={ () => {
                // debugger
                dispatch({type: TOGGLE_COLLAPSED})}}/> {/*передает полученный из app через props в AccordionTitle*/}
            {!state.collapsed && <AccordionBody/>}
            </div>
        }

        //контролируемый, значение collapsed передается в компоненту из app
        // return <div>
        //     <AccordionTitle titleValue={props.titleValue}/> {/*передает полученный из app через props в AccordionTitle*/}
        //     {props.collapsed === false && <AccordionBody/>}
        //     </div>
        //     }

type AccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

//получает title из Accordion через props
function AccordionTitle(props: AccordionTitlePropsType) {
    return <div onClick={() => { props.onClick()}}>{props.titleValue}</div>
}

function AccordionBody() {
    return (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        )
}

export default UncontrolledAccordion;