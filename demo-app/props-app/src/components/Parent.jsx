import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[name,setName]=useState("MIYA")
    const age=23;
  return (
    <div>
<Child fname={name} fage={age}/>
    </div>
  )
}

export default Parent