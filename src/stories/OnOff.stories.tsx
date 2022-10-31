import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {OnOff} from "../components/OnOff/OnOff";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Example/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>

//Сценарии использования
export const OnOffMode = <OnOff on={true} onChange={action('clicked')}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return  <OnOff on={value} onChange={setValue}/>;
}


// export default {
//     title: 'Example/Button',
//     component: Rating,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;


