import React, {useEffect, useState} from "react";
import s from './styleClock.module.css'
import clock from './../../common/clock.png'
import internal from "stream";

type PropsType = {

}

const get2digitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const internalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())

            //clock

            const hr = document.querySelector('#hr')
            const sc = document.querySelector('#sc')


            // hr.s.transform ='rotateZ(${(hh) + (mm/12)})'

        }, 1000);

        return () => {
            clearInterval(internalID) // stop tick when you go to another stories
        }

    },[])
    const deg = 360/60
    let hh = date.getHours() * 30
    let mm = date.getMinutes() * deg
    let ss = date.getSeconds() * deg
    const stylehr = {
        transform: `rotateZ(${((hh) + (mm/12)) + 180}deg)`
    }
    const stylemn = {
        transform: `rotateZ(${(mm) + 180}deg)`
    }
    const stylesc = {
        transform: `rotateZ(${(ss) + 180}deg)`
    }

    return <div className={s.digitalClock}>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
        <div className={s.clockMain}>
        <div className={s.clock} >
            <img className={s.img} src={clock} alt=""/>
            <div className={'hour'} >
                <div className={s.hr} id={'hr'} style={stylehr}></div>
            </div>
            <div className={'min'}>
                <div className={s.mn} id={'mn'} style={stylemn}></div>
            </div>
            <div className={'sec'}>
                <div className={s.sc} id={'sc'} style={stylesc}></div>
            </div>
        </div>
        </div>
    </div>
}