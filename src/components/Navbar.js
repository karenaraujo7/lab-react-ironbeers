import React from 'react';
import { Link } from 'react-router-dom';
import iconHome from '../assets/icon-home -48px.png'

function Navbar(){
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container d-flex justify-content-center">
                <Link className="navbar-brand" to="/">
                    <img src={iconHome}/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;