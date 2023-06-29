import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-opacity-30 bg-black text-black">
            <div>
                <p className='text-black text-3xl'>
                    KAJOL KONA DATTA
                </p>
                <p className="font-bold text-black">
                    kajolkona98@gmail.com 
                </p>
                <p className='font-bold text-black mb-2'>
                +8801766715566
                </p>
                <div className='flex gap-5 text-3xl mb-2'>
                <a href="https://www.linkedin.com/in/kajol-kona-datta/"><FaLinkedin className='text-black'></FaLinkedin></a>
                    <a href="https://github.com/kkd98"><FaGithub className='text-black'></FaGithub></a>
                    <a href='https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d'><FaFacebook className='bg-blue-700 text-white rounded-full border-none'></FaFacebook></a>
                    <a href='https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg'></FaInstagram></a>
                </div>
                <p className='text-black'>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;