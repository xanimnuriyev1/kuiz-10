import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import './home.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductContext } from '../context/ProductContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import { ProductSchema } from '../schema/ProductSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";

const Add = () => {
  const {box,setbox}=useContext(ProductContext)
  const navigate=useNavigate()

  const GetData = async () => {
    const res = await axios.get("http://localhost:5000/products")
    console.log(res?.data);
    setbox(res?.data)
}
useEffect(() => {
    GetData()
}, [])
const { register, handleSubmit,formState: { errors } } = useForm({
  resolver: yupResolver(ProductSchema),
});
const Createdata=async(values)=>{
  await axios.post("http://localhost:5000/products",values)
  GetData()
}
const deletedata=async(id)=>{
  await axios.delete(`http://localhost:5000/products/${id}`)
  GetData()
}
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <input type="text" placeholder='search' onChange={(e)=>{
        let search=box.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setbox(search)
      }}/>
      <button
      onClick={()=>{
        let newarr=[...box].sort((a,b)=>a.title[0].localeCompare(b.title[0]))
        setbox(newarr)
      }}
      >sort</button>
      <form action="" onSubmit={handleSubmit(Createdata)}>
        <input type="text" {...register('title')} placeholder='title'/>
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <br />
        <input type="text" {...register('price')} placeholder='price' />
        {errors.price?.message && <p>{errors.price?.message}</p>}
        <br />
        <button>submit</button>
      </form>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell >title</TableCell>
            <TableCell >price</TableCell>
            <TableCell>delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {box.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row._id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell >{row.price}</TableCell>
              {/* <TableCell ><Button variant="contained" onClick={()=>deletedata(row._id)}>delete</Button></TableCell> */}
              <TableCell ><Button variant="contained" onClick={()=>navigate(`${row._id}`)}>detail</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Add
