import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Modals } from './coponents/Modals'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Modals/>
          </div>
  )
}

export default App
