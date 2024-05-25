import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';




const Addblog = () => {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className='blog'>
        <Typography variant='h1'>ADD BLOG</Typography>
        </div>

        <br /><br />
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }}/>&nbsp;&nbsp;<TextField id="input-with-sx" label="Blog Name" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /><TextField id="input-with-sx" label="Author Name" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <Box><AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /><TextField id="input-with-sx" label="Description" variant="standard" /></Box>&nbsp;&nbsp;&nbsp;&nbsp;
        <br /><br />
        <Button variant="outlined" color='success'>SUBMIT</Button>






      
    </div>
  )
}

export default Addblog
