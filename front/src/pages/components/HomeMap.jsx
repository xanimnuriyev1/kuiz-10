import React, { useContext, useEffect } from 'react'
import '../home.css'
import { ProductContext } from '../../context/ProductContext'
import axios from 'axios'

const HomeMap = () => {
    const { data, setdata } = useContext(ProductContext)
    const GetData = async () => {
        const res = await axios.get("http://localhost:5000/products")
        console.log(res?.data);
        setdata(res?.data)
    }
    useEffect(() => {
        GetData()
    }, [])
    return (
        <div>
            <div className='HomeMap'>
                <div className='HomeCenterTop '>
                    <div className='Border'></div>
                    <div className='Welcome'>our menu</div>
                    <div className='Border'></div>
                </div>
                <div className='map'>
                {
                data.map((elem)=>{
                    return <div className='Cart' key={elem._id}>
                       <p className='title'>{elem.title}</p>
                       <div className='cart'>
                        <p className='mushrooms'>with wild mushrooms and asparagus</p>
                       <div className='Dashed'></div>
                       <p>${elem.price}.00</p>
                       </div>
                    </div>
                })
            }
            </div>
            </div>
           
        </div>
    )
}

export default HomeMap
