import React, {useState, Fragment} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link>Travl<i className="map-marked-alt"></i></Link>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
