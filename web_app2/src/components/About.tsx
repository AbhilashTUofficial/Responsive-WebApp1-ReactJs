import React from 'react';
import aboutImg from "../assets/Images/about.avif";
function About() {
    var columns = [];
    var rows=[];

 
    return (
        <div className="aboutContainer">
            <div className="aboutImg">
                <img src={aboutImg} alt="Abhilash TU" />
            </div>
            <div className="aboutContent">
                <div className="aboutTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="divider"/>
            </div>
        </div>
    )
}

export default About