
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-12 md:p-10 bg-white text-black">
      <div className='flex justify-between w-full'>
        <p className="text-black text-md">Copyright © 2023 - All rights reserved by Kajol Kona Datta</p>
        <a href="#home"><FaArrowCircleUp className='text-2xl text-pink-700'></FaArrowCircleUp></a>
      </div>
    </footer>
  );
};

export default Footer;
