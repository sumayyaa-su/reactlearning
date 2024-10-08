import { DecrementAction,IncrementAction } from '../action'
import { Button } from '@mui/material'
import { connect } from 'react-redux'

function Counter2({value}) {
  
 

 
  return (
    <>
    <br />
    Counter2:{value} <br />
    
      
      
    </>
  )
}
//MAPPING FUNCTION FOR STATE
const mapStateToprops=(state)=>({value:state})


export default connect(mapStateToprops) (Counter2)
