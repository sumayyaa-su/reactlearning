import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../action';

const counter1 = () => {
    const value=useSelector(state=>state.counter1)
    const dispatch=useDispatch();
  return (
    <>
    <div>counter:{value}</div>
     <br />
    <Button onCLICK={()=>dispatch(increment)}>Increment</Button>
    <Button onCLICK={()=>dispatch(decrement)}>Decrement</Button>
    </> 
  )
}

export default counter1