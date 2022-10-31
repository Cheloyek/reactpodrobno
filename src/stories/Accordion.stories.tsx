import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {RatingValueType} from "../components/Rating/Rating";
import {Accordion, AccordionPropsType} from "../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
} as ComponentMeta<typeof Accordion>

const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')

//Сценарии использования
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback,
}

//Template.bind({}) - копия функции
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    //Добавить props
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: [],
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    //Добавить props
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Name1', value: 1}, {title: 'Name2', value: 2}, {title: 'Name3', value: 3}, {
        title: 'Name4',
        value: 4
    }],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users',
    items: [{title: 'Name1', value: 1},
            {title: 'Name2', value: 2},
            {title: 'Name3', value: 3},
            {title: 'Name4', value: 4}],
    onClick: (value) => {
        alert(`user wth ID ${value} should be happy`)
    }
}