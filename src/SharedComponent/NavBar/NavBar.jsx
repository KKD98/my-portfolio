import React, { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='navbar fixed top-0 left-0 z-10 flex gap-6 justify-center bg-white  font-semibold'>
      <a
        href="#home"
        style={{ color: activeLink === 'home' ? '#DE3665' : 'black' }}
        onClick={() => handleLinkClick('home')}
      >
        Home
      </a>
      <a
        href="#about"
        style={{ color: activeLink === 'about' ? '#DE3665' : 'black' }}
        onClick={() => handleLinkClick('about')}
      >
        About
      </a>
      <a
        href="#skills"
        style={{ color: activeLink === 'skills' ? '#DE3665' : 'black' }}
        onClick={() => handleLinkClick('skills')}
      >
        Skills
      </a>
      <a
        href="#projects"
        style={{ color: activeLink === 'projects' ? '#DE3665' : 'black' }}
        onClick={() => handleLinkClick('projects')}
      >
        Projects
      </a>
      <a
        href="#contact"
        style={{ color: activeLink === 'contact' ? '#DE3665' : 'black' }}
        onClick={() => handleLinkClick('contact')}
      >
        Contact
      </a>
    </div>
  );
};

export default NavBar;
