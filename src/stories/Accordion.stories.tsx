import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import  {RatingValueType} from "../components/Rating/Rating";
import {Accordion} from "../components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Example/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>

const callback = action('accordion mode change event fired')
//Сценарии использования
export const CollapsedUncollapsedMode = <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return  <Accordion titleValue={'Menu'} collapsed={value} onChange={() => {setValue(!value)}}/>;
}


// export default {
//     title: 'Example/Button',
//     component: Rating,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


