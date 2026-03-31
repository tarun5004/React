import React, { useState } from 'react'
import Dashboard1 from './components/Dashboard1/Dashboard1'
import Dashboard2 from './components/Dashboard2/Dashboard2'

const App = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <div>
      <button onClick={() => settoggle((prev) => !prev)}> Go To {toggle?"Home":"Users"}</button>

      {
        toggle ? (
          
        <div>
          <Dashboard1 />
        </div>
      ) : (
        <div>
          <Dashboard2 />
        </div>
      )}

    </div>
  )
}

export default App