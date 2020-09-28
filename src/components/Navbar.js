import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {Button} from './Button.js'
import './navbar.css'

function Navbar() {
  const [button, setButton] = useState(true)
  const [click, setClick] = useState(false)
  const [closeMobileMenu, setCloseMobileMenu] = useState()

  const handleClick = () => setClick(!click)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)
  
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Travl
          </Link>
        </div>
        <div>
          <ul className="navbar-container">
            <li>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to='/sign_up' className='nav-links' onClick={closeMobileMenu}>Sign up</Link>
            </li>
            <li>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
          </ul>
        </div>
        {button &&<Button buttonStyle='btn-outline'>LOG IN</Button>}
      </nav>
      
    </Fragment>
  );
}

export default Navbar;
