import React from 'react'
import gmailIcon from "../assets/Icons/gmail_icon.png";
import facebookIcon from "../assets/Icons/facebook_icon.png";
import linkdinIcon from "../assets/Icons/linkedin_icon.png";
import githubIcon from "../assets/Icons/github_icon.png";

function Landing() {
  return (
    <div className="landingContainer">
      <div className="hero">
        <div className="introduction">I'm Abhilash T.U</div>
        <div className="service s1">React Native Developer</div>
        <div className="service s2">React JS Developer</div>
        <div className="selfInfo">Hi there ✋,
          As a budding developer, I'm driven by a passion for programming, eager to explore and learn new technologies, and dedicated to continuous growth in my career.
        </div>
        <div className="btns">
        <div className="downloadCv btn1 btn"> Download CV</div>
        <div className="hireMe btn2 btn"> Hire Me</div>
        </div>
        <div className="contactTags">
          <div className="contactTag">
            <img src={gmailIcon} alt="Gmail" />
          </div>
          <div className="contactTag">
            <img src={githubIcon} alt="Gmail" />
          </div>
          <div className="contactTag">
            <img src={linkdinIcon} alt="Gmail" />
          </div>
          <div className="contactTag">
            <img src={facebookIcon} alt="Gmail" />
          </div>
          <div className="contactTag">
            <img src={gmailIcon} alt="Gmail" />
          </div>
        </div>
      </div>
      <div className="heroImg">
        <img src="" alt="Abhilash TU" />
      </div>

    </div>
  )
}

export default Landing