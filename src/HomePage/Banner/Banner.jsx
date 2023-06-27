import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa';

const Banner = () => {
    const [backgroundGradient, setBackgroundGradient] = useState('bg-gradient-to-r from-pink-500 to-white'); 
    useEffect(() => {
        const changeBackgroundGradient = () => {
          const gradients = [
            'bg-gradient-to-r from-red-500 to-yellow-500',
            'bg-gradient-to-r from-yellow-500 to-green-500',
            'bg-gradient-to-r from-green-500 to-blue-500',
            'bg-gradient-to-r from-blue-500 to-pink-500',
            'bg-gradient-to-r from-purple-500 to-pink-500',
            'bg-gradient-to-r from-pink-500 to-white'
            
          ]; 
          const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]; 
          setBackgroundGradient(randomGradient);
        };
    
        const interval = setInterval(changeBackgroundGradient, 4000); 
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    return (
        <div className={`${backgroundGradient} py-16 h-screen`}>
            <div className="flex flex-col items-center mt-12 gap-6 py-16">
           <p className='text-4xl lg:text-6xl font-semibold text-black'>KAJOL KONA DATTA</p>
           <p className='text-nd lg:text-xl font-semibold text-center text-black'>Passionate about changing the world with technology.</p>
           <div className='flex gap-5 text-3xl mb-2'>
                <a href="https://www.linkedin.com/in/kajol-kona-datta/"><FaLinkedin className='text-white hover:scale-150 transition-transform duration-300'></FaLinkedin></a>
                    <a href="https://github.com/kkd98"><FaGithub className='text-white hover:scale-150 transition-transform duration-300'></FaGithub></a>
                    <a href='https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d'><FaFacebook className='bg-blue-700 text-white rounded-full border-none hover:scale-150 transition-transform duration-300'></FaFacebook></a>
                    <a href='https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg hover:scale-150 transition-transform duration-300'></FaInstagram></a>
                </div>
                <button className='btn border-none bg-white text-black'><FaDownload></FaDownload>Resume</button>
        </div>
        </div>
    );
};

export default Banner;