import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import SigninSignup from './pages/SigninSignup'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import banner_men from './banner/banner_mens.png'
import banner_women from './banner/banner_women.png'
import banner_kid from './banner/banner_kids.png'


function App() {

  return (
    <>
      <div className='app_body'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner={banner_men} category='men' />} />
            <Route path='/women' element={<ShopCategory banner={banner_women} category='women' />} />
            <Route path='/kid' element={<ShopCategory banner={banner_kid} category='kid' />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />}/>
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/signin' element={<SigninSignup />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
