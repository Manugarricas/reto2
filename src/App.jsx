import { useState } from 'react'
import './App.css'

function App() {

  const [seconds, setSeconds] = useState(0);

  function counter() {
    window.myInterval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)

  }
  
  return (
    <>
      <h2>Timer</h2>
      <p>{Math.trunc(seconds/60)} min {seconds%60} secs</p>
      <button onClick={counter}>Start</button>
      <button onClick={()=>clearInterval(window.myInterval)}>Stop</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </>
  )
}

export default App
