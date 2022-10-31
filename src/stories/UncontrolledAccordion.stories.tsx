import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "../components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "../components/Accordion/Accordion";



export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>


export const ModeChanging = () => {
    return  <UncontrolledAccordion titleValue={'Menu'}/>;
}

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;


