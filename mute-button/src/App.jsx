import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import MuteButton from './containers/MuteButton'



function App() {

    
  const [isMute, changeButton ]= useState(true)

  const changeMute = () => {
    if (isMute == true){
      changeButton(false)
    }else{
      changeButton(true)
    }
    // document.getElementById('answer').innerHTML=isMute
  }
  

  return (
    <div id='here' className="App">
      <button onClick={changeMute}><MuteButton isTrue = {isMute}/></button>
      {/* <p id='answer'></p> */}

    </div>
  )
}

export default App
