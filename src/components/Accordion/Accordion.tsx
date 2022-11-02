import React, {useState} from "react";

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: () => void

    /*
    * Elements that are showed when accordion is opened. Each item should be ItemType
    * */
    // items: ItemType[]
    // items: Array<string> // = string[]
    items: ItemType[]

    /*
    * Callback that is called when any item clicked
    * @param value is value of clicked item
    * */
    onClick: (value: any) => void
    /*
    * optional color of header text
    * */
    color?: string
}


//получение title из app через props
//collapsed - если true не покажет AccordionBody {props.collapsed === false && <AccordionBody/>}
export function Accordion(props: AccordionPropsType) {
        //неконтролируемый, значение передается через useState, при нажатии развернет/свернет меню
        //в AccordionTitle передали onClick который вызывает функцию () => {setCollapsed(!collapsed)}
        //AccordionTitle через props.onClick при нажатии вызывает функцию () => {setCollapsed(!collapsed)}
    let [collapsed, setCollapsed] = useState(true)
        return <div>
            <AccordionTitle titleValue={props.titleValue} onChange={ () => {setCollapsed(!collapsed)}}
                            color={props.color}/> {/*передает полученный из app через props в AccordionTitle*/}
            {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
    onChange: () => void
    color?: string
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

//получает title из Accordion через props
function AccordionTitle(props: AccordionTitlePropsType) {
    return <div style={{color: props.color ? props.color : 'blue'}} onClick={(e) => props.onChange()}>{props.titleValue}</div>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
                <ul>
                    {props.items.map((item, index) => <li onClick={() => {props.onClick(item.value)}} key={index}>{item.title}</li>)}
                </ul>
        )
}
