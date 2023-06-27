import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar fixed top-0 left-0 z-10  flex gap-6 justify-center bg-opacity-30 bg-black text-black font-semibold'>
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