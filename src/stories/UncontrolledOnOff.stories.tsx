import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledOnOff} from "../components/UncontrolledOnOff/UncontrolledOnOff";



export default {
    title: 'Example/UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>

//Сценарии использования
export const UncontrolledOnOffMode = <UncontrolledOnOff defaultOn={true} onChange={() => 'clicked'}/>;


const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;


