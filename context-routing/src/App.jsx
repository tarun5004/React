import React, { useContext, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ThemeMode } from './context/ThemeContext.jsx'

const App = () => {

  let {themes} =useContext(ThemeMode);



  return (
    <div className={(themes === 'dark' ? 'dark bg-zinc-950' : 'bg-amber-300') + ' h-screen flex flex-col gap-6 transition-colors duration-300'}>
        <Navbar />
        <div className='h-[90%] '>
          <Home />
        </div>

    </div>
  )
}

export default App
