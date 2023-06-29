import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa';
import resume from '../../../src/assets/KajolKonaDattaResume.pdf';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const [backgroundGradient, setBackgroundGradient] = useState('from-pink-500 to-black');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const gradients = [
      'from-gray-500 to-black',
      'from-yellow-400 to-black',
      'from-red-300 to-black',
      'from-sky-300 to-black',
      'from-purple-300 to-black'
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

  const backgroundClass = `bg-gradient-to-r to-black ${backgroundGradient}`;
  const iconClass = `text-white hover:scale-150 transition-transform duration-300 ${isTransitioning ? 'pointer-events-none' : ''}`;

  return (
    <div id='home' className={`${backgroundClass} pt-16 h-screen`}>
      <div className="flex flex-col items-center mt-12 gap-6 py-16">
        <p className="text-4xl lg:text-6xl font-semibold text-white">KAJOL KONA DATTA</p>
        <TypeAnimation
          sequence={[
            ' Passionate about changing the world with technology.',
            1000
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="text-md lg:text-xl font-semibold text-center text-white"
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
        <a href={resume} download="Kajol_Kona_Datta.pdf" className="btn btn-outline hover:bg-transparent hover:border-2 hover:border-white text-white">
          <FaDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
