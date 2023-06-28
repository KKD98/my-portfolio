import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa';
import resume from '../../../src/assets/Kajol_Kona_Datta.pdf';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  const [backgroundGradient, setBackgroundGradient] = useState('from-pink-500');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const gradients = [
      'from-red-500',
      'from-yellow-500',
      'from-green-500',
      'from-blue-500',
      'from-purple-500',
      'from-pink-500'
    ];

    const changeBackgroundGradient = () => {
      setIsTransitioning(true);

      setTimeout(() => {
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        setBackgroundGradient(randomGradient);
        setIsTransitioning(false);
      }, 500);
    };

    const interval = setInterval(changeBackgroundGradient, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundClass = `bg-gradient-to-r ${isTransitioning ? '' : 'to-white'} ${backgroundGradient}`;
  const iconClass = `text-white hover:scale-150 transition-transform duration-300 ${isTransitioning ? 'pointer-events-none' : ''}`;

  return (
    <div id='home' className={`${backgroundClass} py-16 h-screen`}>
      <div className="flex flex-col items-center mt-12 gap-6 py-16">
        <p className="text-4xl lg:text-6xl font-semibold text-black">KAJOL KONA DATTA</p>
        <TypeAnimation
      sequence={[
        ' Passionate about changing the world with technology.',
        1000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
      className="text-md lg:text-xl font-semibold text-center text-black"
    />
        <div className="flex gap-5 text-3xl mb-2">
          <a href="https://www.linkedin.com/in/kajol-kona-datta/">
            <FaLinkedin className={iconClass} />
          </a>
          <a href="https://github.com/kkd98">
            <FaGithub className={iconClass} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d">
            <FaFacebook className={`${iconClass} bg-blue-700 text-white rounded-full border-none`} />
          </a>
          <a href="https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA==">
            <FaInstagram
              className={`${iconClass} bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg`}
            />
          </a>
        </div>
        <a href={resume} download="Kajol_Kona_Datta.pdf" className="btn border-none bg-white text-black">
          <FaDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;