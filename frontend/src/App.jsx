import React from 'react'
import Navbar from './components/NavBar/NacBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


export default function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          {/* <Route path='' element={} />  */}
        </Routes>
    </div>
  )
}
