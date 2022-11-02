import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Example/Select',
    component: Select,
}


export const WithValue = () => {
    const [value, setValue] = useState('2')
    return < >
        < Select
            onChange={setValue}
            value={value}
            items={
                [
                    {value: '1', title: 'Name1'},
                    {value: '2', title: 'Name2'},
                    {value: '3', title: 'Name3'}
                ]
            }
        />
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Name1'},
                    {value: '2', title: 'Name2'},
                    {value: '3', title: 'Name3'}
                ]}/>
    </>
}
