import React, { useEffect, useState } from 'react'
import "./scss/index.scss"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Free from './components/Free'
import Clients from './components/Clients'
import SuperRare from './components/SuperRare'
import Releases from './components/Releases'
import Like from './components/Like'
import Signup from './components/Signup'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import scrollReveal from 'scrollreveal'

const App = () => {
  const [currentTheme, setCurrentTheme]=useState("dark");
  const changeCurrentTheme=()=>{
    currentTheme==="dark"?setCurrentTheme("light"):setCurrentTheme("dark");
  }
  useEffect(()=>{
    const registerAnimations=()=>{
      const sr= scrollReveal({
        origin:"bottom",
        distance:"80px",
        duration:1000,
        reset:false,
      });
      sr.reveal(`
      nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,footer
      `,{interval:200})
    }
    registerAnimations();
  },[]);
  window.setTimeout(()=>{
    document.getElementsByClassName("home")[0].style.transform="none";
    document.getElementsByTagName("nav")[0].style.transform="none";
  },1500)
  return (
    <div className='app-container' data-theme={currentTheme}>
      <ScrollToTop/>
      <Navbar currentTheme={currentTheme} changeTheme={changeCurrentTheme} />
     <Home/>
      <Free/>
      <Clients/>
      <SuperRare/>
      <Releases/>
      <Like/>
      <Signup/>
      <Footer/> 
    </div>
  )
}

export default App