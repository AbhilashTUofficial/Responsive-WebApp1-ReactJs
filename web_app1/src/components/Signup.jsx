import React from 'react'
import signup from '../assets/signup.png'
function Signup() {
  return (
    <div className='signup'>
    <div className="container">
        <div className="content">
            <p className="sub-title">
                Launching Soon
            </p>
            <h1 className="title">An NFT like no other</h1>
            <p className="description">Don't miss out on the release of our new NFT. Signup below to recieve updates when we go live.</p>
            <button>Sign up</button>
        </div>
        <div className="image-container">
            <div className="image">
                <img src={signup} alt="Sign Up" />
            </div>
            <div className="ellipse-container">
                <div className="ellipse pink"></div>
                <div className="ellipse orange"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signup