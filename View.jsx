import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const View = () => {
    var[data,setdata]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response.data);
        setdata(response.data);
    })
    },[])
    
  return (
    <div>
        <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:'red', fontFamily:'fantasy'}}>ID</TableCell>
            <TableCell style={{color:'red', fontFamily:'fantasy'}}>TITLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>{val.id}</TableCell>
                        <TableCell>{val.title}</TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
      </Table>
    </TableContainer>

      
    </div>
  )
}

export default View
