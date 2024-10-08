import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Add from './Components/Add'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <h2>Welcome to Empolyee App</h2>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add person={{empid:'E104',name:'Vishnu',dept:'Civil',location:'Karunagapally'}}/>}></Route>
        </Routes>
      {/* <Home/>
      <br />
      <Add/> */}
    </>
  )
}

export default App