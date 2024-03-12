import React, { useState } from 'react'
import { BsChevronUp } from 'react-icons/bs';

function ScrollToTop() {
    const [visible, setVisible]=useState(false);
    window.addEventListener("scroll",()=>{
        setVisible(window.pageXOffset>100)

    })
  return (
   <div className={`scrollTop ${visible&&"visible"}`}>
    <a href="#">
        <BsChevronUp/>
    </a>
   </div>
  )
}

export default ScrollToTop