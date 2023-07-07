import React, { useState } from 'react';
import image from '../assets/careermaker.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CareerMaker = () => {
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
                <p className='text-3xl font-semibold text-black'>Career Maker</p>
                <p className='text-2xl text-black'>Career Maker is job portal website.</p>
                <p className='text-xl  text-black'>Features</p>
                <p className='text-md  text-black'>  ✦ On CareerMaker Website there are a few categories of many jobs. Some top-rated Jobs are featured on the
                    Home page.</p>
                <p className='text-md  text-black'>✦ Users can also see which jobs they applied for and all the job details.</p>
                <p className='text-md  text-black'>✦ Users can filter all the jobs by On-Site and remote.</p>
                <p className='text-xl  text-black'>Technologies</p>
                <p className='text-md'> React.js | Tailwind CSS | DaisyUI </p>
                <div className='flex gap-3'>
                    <Link to="https://careermakerbykajol.netlify.app/"> <button className='btn btn-outline border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-black hover:border-pink-700'>Live Site</button></Link>
                    <Link to="https://github.com/KKD98/career-hub.git"> <button className='btn btn-outline border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-black hover:border-pink-700'><FaGithub></FaGithub> Client</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CareerMaker;
