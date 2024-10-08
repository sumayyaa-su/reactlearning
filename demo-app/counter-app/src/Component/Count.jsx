import { useState } from 'react'
import { DecrementAction,IncrementAction } from '../action'
import { Button } from '@mui/material'
import { connect } from 'react-redux'

function Count({value,IncrementAction,DecrementAction}) {
  // const [count,setCount] = useState(0)
//   // const [count, setCount] = useState(0)
// // const incrementfunc=()=>{
// //   setCount=count+1
// // }

// }
 

 
  return (
    <>
    counter:{value} <br />
    
      <Button  variant="contained" sx={{margin:3}}onClick= {IncrementAction}>increment</Button>
      <Button variant="contained" onClick={DecrementAction}>decrement</Button>
      
    </>
  )
}
//MAPPING FUNCTION FOR STATE
const mapStateToprops=(state)=>({value:state})
//MAPPING FUNCTION FOR ACTIONS
const mapDispatchToProps={
  IncrementAction,
  DecrementAction
}

export default connect(mapStateToprops,mapDispatchToProps) (Count)
