import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/components/Home'
import Add from './pages/Add'
import Detail from './pages/Detail'
import Header from './layout/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/:detailId' element={<Detail/>}/>
    </Routes>
    </>
  )
}

export default App
