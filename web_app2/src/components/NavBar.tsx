import React from 'react'

function NavBar() {
  return (
    <div className="navContainer">
        <ul className='navItems'>
            <div className="navItem portfolio">Portfolio</div>
            <div className="links">
            <li className="navItem link"><a href="#">Home</a></li>
            <li className="navItem link"><a href="#">About</a></li>
            <li className="navItem link"><a href="#">Hire</a></li>
            <li className="navItem link"><a href="#">Experience</a></li>
            </div>
          
        </ul>
    </div>
  )
}

export default NavBar