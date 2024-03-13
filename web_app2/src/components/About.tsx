import React from 'react';
import aboutImg from "../assets/Images/about.avif";
function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutImg">
                <img src={aboutImg} alt="Abhilash TU" />
                <img src={aboutImg} alt="Abhilash TU" />


            </div>
            <div className="aboutContent">
                <div className="aboutTxt">I'm Abhilash T.U</div>

      
            </div>
        </div>
    )
}

export default About