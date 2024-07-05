import React from 'react'
import { useState } from 'react'

const counter = () => {
    const[counter,setCounter]=useState(0);
    const onIncrement=()=>{
        setCounter(counter+1);
    }
    const onDecrement=()=>{
        setCounter(counter-1)
    }

  return (
    <div>
      <button type='button' onClick={onIncrement}>+</button>
      <button type='button' onClick={onDecrement}>-</button>
    </div>
  )
}

export default counter
