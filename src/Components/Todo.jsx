import React from "react";
import { Todoitem } from "./Todoitem";
import { Todoinput } from "./Todoinput";
import { useState } from "react";
export const Todo = () => {
  const [editIndex,setEditIndex]=useState(-1);
  const [editItem,setEditItem]=useState("");
  const [item, setItem] = useState([]);
  const handleDelete = (index) =>{
    item.splice(index,1);
    setItem([...item]);
  }
  const handleEdit = (index) =>{
    item.splice(index,1,editItem);
    setItem([...item]);
  }
  return (
    <>
      <Todoinput
        getData={(text) => {
          setItem([...item, text]);
          
        }}
      />
      <div>
        <input value={editItem } onChange={(e)=>{
          setEditItem(e.target.value);
          
        }}/>
        <button onClick={()=>{
          handleEdit(editIndex);
          
        }}>Edit</button>
      </div>


      {item.map((e,ind) => (
        <div key={ind}>
          <Todoitem text={e} />
          <button onClick = {
            ()=>(
              handleDelete(ind)
            )
          }>Delete</button>
          <button onClick={()=>{
            setEditItem(e);
            setEditIndex(ind);
          }}>edit</button>
        </div>
      ))}
    </>
  );
};
