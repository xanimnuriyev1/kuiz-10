import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ProductProvider } from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <ProductProvider>

 <App />
 </ProductProvider>
 </BrowserRouter>
  
)
