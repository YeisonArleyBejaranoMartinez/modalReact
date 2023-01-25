import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListaTareas from './coponents/ListaTareas'
import Tron from './JuegoTron/components/Tron'
// import { Modals } from './coponents/Modals'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Modals /> */}
      {/* <ListaTareas/> */}
      <Tron/>
    </div>
  )
}

export default App
