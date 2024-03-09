import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './componets/LogIn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LogIn/>
    </div>
  )
}

export default App
