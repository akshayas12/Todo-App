import React from 'react'
import {useState} from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue]=useState("");

    const addItem=()=>{
     addTask(value);
     setValue("")
    };
  return (
    <>
       <div className='input-container'>
        <input type="text" className='input' placeholder='Add new task'
       value={value}  onChange={(event)=>{setValue(event.target.value);}}
        />
        <button className='add-btn' onClick={addItem}>ADD</button>
       </div>
    </>
  )
}

export default AddTask
