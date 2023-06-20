import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black">
            <div>
                <p className='text-white text-3xl'>
                    KAJOL KONA DATTA
                </p>
                <p className="font-bold text-white">
                    kajolkona98@gmail.com 
                </p>
                <p className='font-bold text-white mb-2'>
                +8801766715566
                </p>
                <div className='flex gap-5 text-3xl mb-2'>
                    <a href="https://github.com/kkd98"><FaGithub className='text-white'></FaGithub></a>
                    <a href='https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d'><FaFacebook className='bg-blue-700 text-white rounded-full border-none'></FaFacebook></a>
                    <a href='https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg'></FaInstagram></a>
                </div>
                <p className='text-white'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;