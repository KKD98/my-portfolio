import React, { useState } from 'react';
import image from '../../assets/disney-world.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MusicMentor = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const containerStyle = {
        width: '400px',
        height: '450px',
        overflow: 'hidden',
        position: 'relative',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: isHovered ? '0' : 'initial',
        transform: `translateY(${isHovered ? '-100%' : '0'})`,
        transition: 'transform 8s ease',
    };

    return (
        <div className='flex flex-col lg:flex-row gap-3 mx-auto w-full lg:w-[70%] mb-8'>
            <div
                style={containerStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='mx-auto lg:mx-0 w-full'
            >
                <img
                    src={image}
                    alt=""
                    style={imageStyle}
                />
            </div>
            <div className='w-[60%] flex flex-col gap-2 justify-center'>
                <p className='text-3xl font-semibold text-black'>Disney World</p>
                <p className='text-2xl text-black'>Disney World is a online toy shop. You can buy toys from here.</p>
                <p className='text-xl  text-black'>Features</p>
                <p className='text-md  text-black'>✦ Users can see and sell toys on this website. There are category options for users to see and categorize toys.</p>
                <p className='text-md  text-black'>✦ To see toy details users have to login. There is a search section for users to find toys.</p>
                <p className='text-md  text-black'>✦ There is a server for toy documents to store, update, and delete. Also a search route for toys by the prefix of
                    toys name.</p>
                <p className='text-xl  text-black'>Technologies</p>
                <p className='text-md'> React Js | Tailwind CSS | DaisyUI | Google Auth | React Router | Vercel | Firebase | Node.js | Express.js | MongoDB</p>
                <div className='flex gap-3'>
                    <Link to="https://disney-world-dbe96.web.app/"> <button className='btn bg-gray-200 text-black'>Live Site</button></Link>
                    <Link to="https://github.com/KKD98/disney-world-client.git"> <button className='btn bg-gray-200 text-black'><FaGithub></FaGithub> Client</button></Link>
                    <Link to="https://github.com/KKD98/disney-world-server.git"><button className='btn bg-gray-200 text-black'><FaGithub></FaGithub> Server</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MusicMentor;
