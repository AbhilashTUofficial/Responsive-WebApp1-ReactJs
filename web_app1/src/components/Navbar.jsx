import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import {MdClose} from "react-icons/md"
import {GiHamburgerMenu} from "react-icons/gi"


function Navbar({ currentTheme, changeTheme }) {
  const [navState, setNavState] = useState(false);

  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {
                navState?(<MdClose onClick={()=>setNavState(false)}/>):(<GiHamburgerMenu onClick={()=>setNavState(true)}/>)
            }
          </div>
          <div className="mode" onClick={()=>changeTheme()}>
            {currentTheme === "dark" ? (
              <BsSunFill className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState?"nav-visible":""}`}>
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <BsSunFill className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
