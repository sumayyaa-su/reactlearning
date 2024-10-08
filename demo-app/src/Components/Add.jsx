import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

   
const Add = ({person}) => {
const [employee,setEmployee]=useState({
  empid:person.empid,
  name:person.name,
  dept:person.dept,
  location:person.location
})
const fetchValue=(e) => {
  // console.log(e)
  setEmployee({...employee,[e.target.name]:e.target.value})
}
const sentData=()=>{
  console.log(employee)
}



  return (<div>
    <h2>NEW EMPLOYEE</h2>
<TextField id="standard-basic"
 label="Employee Id"
  variant="standard"
   name='empid' 
   value={employee.empid}
    onChange={fetchValue} /><br/>
<TextField id="standard-basic" 
label="Employee Name"
 variant="standard"
  name='name'
  value={employee.name} 
  onChange={fetchValue} /><br/>

<TextField id="standard-basic"
 label="Department"
  variant="standard"
   name='dept'
    value={employee.dept}
     onChange={fetchValue} /><br/>

<TextField id="standard-basic"
 label="Location"
  variant="standard"
   name='location'
    value={employee.location}
    onChange={fetchValue}/><br/>
<br /><br />
 <Button variant="contained" onClick={sentData}>Submit</Button></div>
  )
}

export default Add