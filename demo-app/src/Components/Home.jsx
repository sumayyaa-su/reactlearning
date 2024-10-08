import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () => {
    const rows=[{
        empid:1034,
        name:"Anu",
        dept:"Program Head",
        location:"tvm"
    },
    {
        empid:1036,
        name:"Amal",
        dept:"Marketing",
        location:"tvm "
    },
    {
        empid:1037,
        name:"Ekshay",
        dept:"electrical",
        location:"tvm" 
    }
]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>empid</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">dept&nbsp;</TableCell>
            <TableCell align="right">location&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.empid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.empid}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.dept}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




export default Home