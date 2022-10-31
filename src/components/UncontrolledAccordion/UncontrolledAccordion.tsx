import React, {useState} from "react";

export type AccordionPropsType = {
    titleValue: string,
}


//снаружи не передается то, что контролирует его состояние
//collapsed - если true не покажет AccordionBody {props.collapsed === false && <AccordionBody/>}
function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('UncontrolledAccordion rendering')
        //неконтролируемый, значение передается через useState, при нажатии развернет/свернет меню
        //в AccordionTitle передали onClick который вызывает функцию () => {setCollapsed(!collapsed)}
        //AccordionTitle через props.onClick при нажатии вызывает функцию () => {setCollapsed(!collapsed)}
    let [collapsed, setCollapsed] = useState(true)
        return <div>
            <AccordionTitle titleValue={props.titleValue} onClick={ () => {setCollapsed(!collapsed)}}/> {/*передает полученный из app через props в AccordionTitle*/}
            {!collapsed && <AccordionBody/>}
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