import { useState } from 'react'
import './App.css'



import Header from './components/Header/Header'
import About from './components/About/About'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='wrapper'>
        <About/>

      </div>
      <Footer/>
    </>
  )
}

export default App
