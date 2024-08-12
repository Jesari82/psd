import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Portfolio from './sections/Portfolio';
import CallToAction from './sections/CallToAction';
import Blog from './sections/Blog';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Portfolio />
      <CallToAction />
      <Blog />
    </div>
       
    </>
  )
}

export default App
