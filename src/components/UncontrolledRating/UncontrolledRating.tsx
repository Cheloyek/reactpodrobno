import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

function UncontrolledRating(props: RatingPropsType) {
/*компактный, значение value передается из useState*/
    //при клике на star будет выделен, тк передается setValue и value
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            {/*Выделение при клике на кнопку <Star selected={value > 0}/><button onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 0} setValue={ () => {setValue(1); props.onChange(1)} } />
            <Star selected={value > 1} setValue={ () => {setValue(2); props.onChange(2)} } />
            <Star selected={value > 2} setValue={ () => {setValue(3); props.onChange(3)} } />
            <Star selected={value > 3} setValue={ () => {setValue(4); props.onChange(4)} } />
            <Star selected={value > 4} setValue={ () => {setValue(5); props.onChange(5)} } />
        </div>

        /* не компактный код star с использованием if
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
 */
    )
}


type StarPropsType = {
    selected: boolean
    setValue: () => void
}

//краткий вид
function Star(props: StarPropsType) {
    // return props.selected ? <span><b>star </b></span> : <span>star </span>
    return <span onClick={ () => {props.setValue()} }>
        {props.selected ? <b>star </b> : 'star '}
    </span>
    }

//не краткий вид
// function Star(props: StarPropsType) {
//     if (props.selected === true) { // если в star передали true
//         return <span><b>star </b></span> // то выделение текста <b></b>
//     } else {
//             return <span>star </span>
//         }
//     }


export default UncontrolledRating;