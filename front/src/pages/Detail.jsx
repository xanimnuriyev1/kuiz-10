import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const {detailId}=useParams()
  const [prd,setprd]=useState([])
  const GetData = async () => {
    const res = await axios.get("http://localhost:5000/products/"+detailId)
    console.log(res?.data);
    setprd(res?.data)
}
useEffect(() => {
    GetData()
}, [])
  return (
    <div>
      <p>{prd.title}</p>
      <p>{prd.price}</p>
    </div>
  )
}

export default Detail
