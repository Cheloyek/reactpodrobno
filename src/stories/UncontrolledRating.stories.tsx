import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import UncontrolledRating from "../components/UncontrolledRating/UncontrolledRating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Example/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>


const callback = action('rating changed inside component')
export const UncontrolledRatingMode = <UncontrolledRating defaultValue={0} onChange={callback}/>;


const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;


