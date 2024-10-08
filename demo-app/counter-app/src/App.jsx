import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import Count from './Component/Count'
import { Provider } from 'react-redux'
import store from './store'
import Counter2 from './Component/Counter2'

function App() {
  // const [count,setCount] = useState(0)
//   // const [count, setCount] = useState(0)
// // const incrementfunc=()=>{
// //   setCount=count+1
// // }

// }
 

 
  return (
    <>
    {/* counter:{count} <br />
    
      <Button  variant="contained" sx={{margin:3}}onClick={()=>setCount(count+1)} >increment</Button>
      <Button variant="contained" onClick={()=>setCount(count-1)}>decrement</Button>
       */}
       <Provider store={store}>
      <Count/> 
      <Counter2/>
      </Provider>
    </>
  )
}

export default App
