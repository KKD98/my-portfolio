import React, { useState } from 'react';
import image from '../../assets/music-mentor.png';
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
            <div className='w-[90%] lg:w-[60%] flex flex-col gap-2 justify-center mx-auto'>
                <p className='text-3xl font-semibold text-black'>Music Mentor</p>
                <p className='text-2xl text-black'>Music Mentor is a online music school. You can teach or learn music here.</p>
                <p className='text-xl  text-black'>Features</p>
                <p className='text-md  text-black'>✦ Three types of dynamic dashboard for students, instructors and Admin. Users have to login to see the dashboard.</p>
                <p className='text-md  text-black'>✦ Instructors can create new classes and update it. Admin can approve or deny classes added by instructors.</p>
                <p className='text-md  text-black'>✦Student can enroll classes by make payment.</p>
                <p className='text-xl  text-black'>Technologies</p>
                <p className='text-md'> React.js | React Router | Tailwind CSS | Axios | DaisyUI |  Firebase | Google Auth | Node.js | Express.js | MongoDB</p>
                <div className='flex gap-3'>
                   <Link to="https://music-mentor-b51dd.web.app/"> <button className='btn btn-outline border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-black hover:border-pink-700'>Live Site</button></Link>
                   <Link to="https://github.com/KKD98/music-mentor-client.git"> <button className='btn btn-outline border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-black hover:border-pink-700'><FaGithub></FaGithub> Client</button></Link>
                    <Link to="https://github.com/KKD98/music-mentor-server.git"><button className='btn btn-outline border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-black hover:border-pink-700'><FaGithub></FaGithub> Server</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MusicMentor;
