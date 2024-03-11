import React from 'react'
import "./scss/index.scss"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Free from './components/Free'
import Clients from './components/Clients'
import SuperRare from './components/SuperRare'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <Free/>
      <Clients/>
      <SuperRare/>
    </div>
  )
}

export default App