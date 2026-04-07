import React from 'react'
import Navbar from './components/Navbar'
import AppsRoutes from './routes/AppsRoutes'

const App = () => {
  return (
    <div className='h-screen p-5 '>
      <Navbar />
      <AppsRoutes />

    </div>
  )
}

export default App
