import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingValueType} from "../components/Rating/Rating";



export default {
    title: 'Example/Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>

//Сценарии использования
export const RatingValue = <Rating value={0} onClick={x => x}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return  <Rating value={rating} onClick={setRating}/>;
}


// export default {
//     title: 'Example/Button',
//     component: Rating,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;


