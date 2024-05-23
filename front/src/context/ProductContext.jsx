import { createContext, useState } from "react";

export const ProductContext=createContext()

export const ProductProvider=({children})=>{
    const [data,setdata]=useState([])
    const [box,setbox]=useState([])

    return (
        <ProductContext.Provider
        value={{data,setdata,box,setbox}}
        
        >
            {children}
        </ProductContext.Provider>
    )
}