import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingValueType} from "../components/Rating/Rating";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {action} from "@storybook/addon-actions";



export default {
    title: 'Example/input',
    // component: input,
}

//Сценарии использования
export const UncontrolledInput = () => <input />;
export const ControlledInputWithFixedValue = () => <input value={'FixedValue'}/>;


//При вводе в input срабатывает callback передающий значение
export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            const actualValue = event.currentTarget.value;
            setValue(actualValue)
        }

    return <><input onChange={ onChange }/> - {value} </>
}

//Обновление при нажатии на кнопку
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null) // создана ссылка при помощи useRef()

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
// привязка ссылки к input
    return <><input ref={inputRef} /> <button onClick= { save }>save</button> -actual value: {value} </>
}

export const ContolledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }
    return <input value={parentValue} onChange={onChange}/>
}

export const ContolledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.checked) }
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}
export const ContolledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => { setParentValue(e.currentTarget.value) }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
    </select>
}


