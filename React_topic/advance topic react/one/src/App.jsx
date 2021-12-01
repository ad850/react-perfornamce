import React from 'react'
import { useState } from "react";
import './'


const App = () => {

  const [state, setstate] = useState("");


  return (
    <>

      <div className="input">

        <div className="center">

          <input type="text" name="inp" className="inp" />

        </div>



      </div>
    </>
  )
}

export default App
