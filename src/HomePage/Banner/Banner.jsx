import React from 'react';
import img from '../../assets/myimg.jpeg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='pt-16 flex flex-col gap-5 items-center justify-center my-3 p-5'>
        <div className='w-full '>
                <img className='rounded-full w-[35%] md:w-[25%] mx-auto' src={img} alt="" />
            </div>
            <div className='my-3 w-full md:w-[60%]'>
                <p className='text-2xl text-center text-black font-semibold'>Hello, This is Kajol Kona Datta from Bangladesh. I have pursued a B.Sc. in Computer Science & Engineering. At this moment in time, I am looking fora job as a Front-end developer. I am a quick learner. I never give up until I get something right and, I am a lifetime learner.</p>
            </div>

            <Link to="/about"><button className='btn bg-black hover:bg-gray-800 text-white'>Read More</button></Link>
            
        </div>
    );
};

export default Banner;