import React from 'react';
import { useState } from 'react';
export const Todoinput = ({getData}) => {
    const [text,setText] =useState("");
    const handlechange = (e)=>{
        setText(e.target.value);
        

    }
  return (
    <>
    <input onChange={handlechange} value={text}/>
    <button onClick={
        ()=>
        {
            getData(text);
            setText("");
        }
    }>Add Todo</button>
    </>
  )
}