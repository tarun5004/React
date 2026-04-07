import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../screens/Home'
import About from '../screens/About'
import Products from '../screens/Products'
import Contact from '../screens/Contact'
import Cart from '../screens/Cart'
import ProductPage from '../screens/ProductPage'


const AppsRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element= {<Home /> } />
            <Route path='/about' element= {<About /> } />
            <Route path='/products' element= {<Products /> } />
            <Route path='/contact' element= {<Contact /> } />
            <Route path='/cart' element= {<Cart /> } />
            <Route path='/productPage/:id' element= { <ProductPage /> } />
        </Routes>
    </div>
  )
}

export default AppsRoutes
