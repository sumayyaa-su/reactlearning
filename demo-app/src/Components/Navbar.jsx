import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="Black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EMPLOYEEAPP
          </Typography>
         <Link to={'/'}><Button color="inherit">HOME</Button></Link>
         <Link to={'/add'}><Button color="inherit">ADD</Button></Link> 
        </Toolbar>
      </AppBar>
    </Box>
  

  )
}

export default Navbar