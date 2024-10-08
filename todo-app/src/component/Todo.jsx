import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';



const Todo = () => {
  const [list,setList]=useState([]);
  const [loading,setLoading]=useState(true);
//CONNECTING API
useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
setList(res.data);
})
},[])
      

  
 return (
        <>
        <div>
        <Typography
      variant="h3" sx={{ 
        textAlign: 'centre', 
        marginBottom: '5', 
        color: '#333', 
        fontWeight: 'bold' 
      }}>
      Todo App
    </Typography>
    <Box 
      sx={{
        width: '100%', maxWidth: '360', backgroundColor:'#f9f9f9', padding: '2', borderRadius:'2', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>

            <nav aria-label="TODO APP">
              <List style={{ padding:'0', margin: '0', listStyle: 'none', backgroundColor: '#f9f9f9'}}>

                {list.map((lists) => (
                  <ListItem key={('https://jsonplaceholder.typicode.com/todos')} disablePadding>
    {/* sx={{display: 'flex',alignItems: 'center',padding: '10px',borderBottom: '1px solid #ddd','&:hover': { backgroundColor: '#f2f2f2'}}} */}

                    <ListItemButton>
     {/* sx={{ padding:'0', margin:'0',  width: '100%',justifyContent: 'flex-start'}} */}

                      <ListItemIcon> 
                         {/* sx={{ minWidth: 0, marginRight: '10px', color: 'green'}} */}
                         </ListItemIcon>
                      <ListItemText  
                      // primaryTypographyProps={{fontSize: '18px', fontWeight: 'bold'}}

                       primary={lists.id}/>
                      <ListItemText primary={lists.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </nav>
           
          </Box>
    
    
        </div>
        </>
      )
    }
    
    
    export default Todo
