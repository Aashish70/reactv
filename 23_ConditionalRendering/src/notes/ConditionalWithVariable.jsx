import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import OtherComponent from './components/OtherComponent';

function App() {

    let option = "d"

    let content;

    if(option === "a"){
      content = <ComponentA/>
    }else if(option === "b"){
      content = <ComponentB/>
    }else if(option === "c"){
      content = <ComponentC/>
    }else{
      content = <OtherComponent/>
    }


    return (
      <div>{content}</div>
    )

}


export default App
