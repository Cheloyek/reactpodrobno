import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean,
}


//получение title из app через props
//collapsed - если true не покажет AccordionBody {props.collapsed === false && <AccordionBody/>}
function Accordion(props: AccordionPropsType) {
        //неконтролируемый, значение передается через useState, при нажатии развернет/свернет меню
    let [collapsed, setCollapsed] = useState(true)
        return <div>
            <AccordionTitle titleValue={props.titleValue}/> {/*передает полученный из app через props в AccordionTitle*/}
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
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
}

//получает title из Accordion через props
function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>{props.titleValue}</div>
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

export default Accordion;