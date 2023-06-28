import React from 'react';
import img from '../../assets/myimg.jpeg'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    
    return (
        <div id='about' className='bg-gray-200 py-16 mb-8'>
            <div className='py-16 w-[70%] mx-auto flex flex-col lg:flex-row-reverse justify-between items-center'>
                <div className='w-full'>
                    <img className='rounded-full w-full lg:w-[80%]  lg:p-5 mx-auto' src={img} alt="" />
                </div>
                <div className='my-3 w-full flex flex-col gap-4 items-center'>
                    <p className='text-2xl text-justify md:p-3 text-black font-semibold'>Hello, This is Kajol Kona Datta from Bangladesh. I have pursued a B.Sc. in Computer Science & Engineering. At this moment in time, I am looking fora job as a Front-end developer. I am a quick learner. I never give up until I get something right and, I am a lifetime learner.</p>
                    <Link to="/about"><button className='btn bg-black hover:bg-gray-800 text-white'>Read More</button></Link>
                </div>



            </div>
        </div>
    );
};

export default AboutMe;