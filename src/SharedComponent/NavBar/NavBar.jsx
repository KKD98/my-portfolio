import React, { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navbar fixed top-0 left-0 z-10 flex gap-6 justify-center bg-opacity-30 bg-black text-slate-900 font-semibold'>
      <a
        href="#home"
        style={{ color: activeLink === 'home' ? 'black' : 'inherit' }}
        onClick={() => handleLinkClick('home')}
      >
        Home
      </a>
      <a
        href="#about"
        style={{ color: activeLink === 'about' ? 'black' : 'inherit' }}
        onClick={() => handleLinkClick('about')}
      >
        About
      </a>
      <a
        href="#skills"
        style={{ color: activeLink === 'skills' ? 'black' : 'inherit' }}
        onClick={() => handleLinkClick('skills')}
      >
        Skills
      </a>
      <a
        href="#projects"
        style={{ color: activeLink === 'projects' ? 'black' : 'inherit' }}
        onClick={() => handleLinkClick('projects')}
      >
        Projects
      </a>
      <a
        href="#contact"
        style={{ color: activeLink === 'contact' ? 'black' : 'inherit' }}
        onClick={() => handleLinkClick('contact')}
      >
        Contact
      </a>
    </div>
  );
};

export default NavBar;
