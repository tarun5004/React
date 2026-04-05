import React, { useContext, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ThemeMode } from './context/ThemeContext.jsx'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  let {themes, renderPages} =useContext(ThemeMode);



  return (
    <div className={(themes === 'dark' ? 'dark bg-zinc-950' : 'bg-amber-300') + ' h-screen flex flex-col gap-6 transition-colors duration-300'}>
        <Navbar />
        <div className='h-[90%] '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

    </div>
  )
}

export default App
