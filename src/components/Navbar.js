import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {Button} from './Button.js'

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/'>
            Travl
          </Link>
        </div>
        <div className="navbar-container">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/sign_up'>Sign up</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Button buttonStyles='btn-outline'>LOG IN</Button>
    </Fragment>
  );
}

export default Navbar;
