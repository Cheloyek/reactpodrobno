import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingValueType} from "../components/Rating/Rating";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;



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


