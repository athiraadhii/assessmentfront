import { fab } from '@fortawesome/free-brands-svg-icons'
import { faB, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" style={{color: "#ffffff",}} /><div className='blog'><Typography variant='h6'>BLOG&nbsp;&nbsp;</Typography></div>

                <div className='but'>
                <Link to='/H'><Button className='butt' variant="contained" color='error'>HOME</Button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/A'><Button className='butt' variant="contained" color='success'>ADD BLOG</Button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/V'><Button className='butt' variant="contained" color='success'>VIEW</Button></Link>&nbsp;&nbsp;&nbsp;
                </div>


            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
