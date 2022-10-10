import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App(props:any) {


  return (
    <div className={"App"}>
      <PageTitle title={'This is APP component'}/>
        <UncontrolledRating/>
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <OnOff/>
        <Accordion titleValue={'Меню'}/>
        <OnOff/>
        <Accordion titleValue={'sdsdf'}/>
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
