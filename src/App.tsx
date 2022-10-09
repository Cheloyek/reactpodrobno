import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {


  return (
    <div>
      <PageTitle title={'This is APP component'}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff on={true} />
        <Accordion titleValue={'Меню'} collapsed={true}/>
        <OnOff on={true}/>
        <Accordion titleValue={'sdsdf'} collapsed={false}/>
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
