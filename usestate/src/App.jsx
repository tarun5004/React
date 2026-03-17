import React, { useState } from 'react'

const App = () => {
    console.log('App component rendered')
  let [count, setCount] = useState(0)


  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className='text-[50px] font-bold' >Count {count}</h1>
      <button 
        onClick={() => {
          setCount(++count)
          
      }} 
      className='p-2 bg-blue-500 text-white rounded'>increment button</button>
    </div>
  )
}

export default App