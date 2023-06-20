import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar fixed top-0 left-0  flex gap-6 justify-center bg-black py-3 text-white'>
            <NavLink to="/" style={({ isActive }) => {
            return {
                color: isActive && "Blue",
            };
        }}>Home</NavLink>
            <NavLink to="/about" style={({ isActive }) => {
            return {
                color: isActive && "Blue",
            };
        }}>About</NavLink>
            <NavLink to="/projects" style={({ isActive }) => {
            return {
                color: isActive && "Blue",
            };
        }}>Projects</NavLink>
            <NavLink to="/contact" style={({ isActive }) => {
            return {
                color: isActive && "Blue",
            };
        }}>Contact</NavLink>
        </div>
    );
};

export default NavBar; 