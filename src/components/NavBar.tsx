import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper pad1rem purple darken-2">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">ToDo</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div> 
        </nav>
    );
};

export default NavBar;