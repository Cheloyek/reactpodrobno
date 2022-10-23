import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating"
import {AccordionPropsType} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App(props: any) {

  //выделение через useState
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)
  return (
    <div className={"App"}>
      <PageTitle title={'This is APP component'}/>
        <UncontrolledRating/> {/*1 способ рейтинга*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        <Rating value={ratingValue} onClick={setRatingValue}/> {/*2 способ рейтинга*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <OnOff on={switchOn} onChange={setSwitchOn}/> {/*значение on off доступно для использования*/}
        {/*<Accordion titleValue={'Меню'}/>*/}
        <Accordion titleValue={'Меню'} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()} {/*значение on off не достать для использования*/}
    </div>
  );
}

type PagePropsTitle = {
  title: string
}

function PageTitle(props: PagePropsTitle) {
  return <>{props.title}</>
}

export default App;
