import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { Axios } from 'axios';

const Home = () => {
//     const rows=[{
//         empid:1034,
//         name:"Anu",
//         dept:"Program Head",
//         location:"tvm"
//     },
//     {
//         empid:1036,
//         name:"Amal",
//         dept:"Marketing",
//         location:"tvm "
//     },
//     {
//         empid:1037,
//         name:"Ekshay",
//         dept:"electrical",
//         location:"tvm" 
//     }
// ]
const [rows,setRows]=useState([]);
//CONNECTING API
useEffect(()=>{
  axios.get('https://dummyjson.com/users').then((res)=>{
  setRows(res.data.users);
  })
},[])




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="centre">first Name</TableCell>
            <TableCell align="right">last Name</TableCell>
            <TableCell align="right">gender</TableCell>
            <TableCell align="right">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




export default Home