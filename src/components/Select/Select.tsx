import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    //отобразить текущее value, пробежать по items найти тот в котором совпадает value, отобразить title
    const selectedItem = props.items.find(i => i.value === props.value) // выбранный элемент
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)  // элемент на который навели выделяется

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active) // закрывается выпадающий список
    const itemClicked = (value: any) => props.onChange
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e)
        // нажатие вниз
        if (e.key === "ArrowDown") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pElement = e.key === "ArrowDown"
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        // нажатие вверх
        if (e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    if (props.items[i - 1]) {
                        props.onChange(props.items[i - 1].value)
                        break
                    }
                }
            }
        }
        //
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span
                className={styles.main}
                onClick={toggleItems} >
                {selectedItem && selectedItem.title}
            </span>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => {setHoveredElementValue(i.value)}}  /*курсор над элементом*/
                        className={styles.item + " " + (hoveredItem === i ? styles.selected : "")} /*выделит выбранный элемент*/
                        key={i.value}
                        onClick={() => {onItemClick(i.value)}}
                    >{i.title}
                    </div>)}
                </div>
            }
        </div>
        )
}
