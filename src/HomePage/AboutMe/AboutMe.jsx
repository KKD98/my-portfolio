import React from 'react';
import img from '../../assets/myimg.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    AOS.init();
    return (
        <div id='about' className='bg-opacity-20 bg-black py-16 mb-8'>
            <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-10'>---About Me---</p>
            <div className='py-16 w-[70%] mx-auto flex flex-col lg:flex-row-reverse justify-between items-center'>
                <div className='w-full'  data-aos="flip-right"
                    data-aos-duration="1500">
                    <img className='rounded-full w-full lg:w-[80%]  lg:p-5 mx-auto' src={img} alt="" />
                </div>
                <div className='my-3 w-full flex flex-col gap-4 items-center'>
                    <p className='text-2xl text-justify md:p-3 text-black font-semibold'>Hello, This is Kajol Kona Datta from Bangladesh. I have pursued a B.Sc. in Computer Science & Engineering. At this moment in time, I am looking fora job as a Front-end developer. I am a quick learner. I never give up until I get something right and, I am a lifetime learner.</p>
                </div>



            </div>
        </div>
    );
};

export default AboutMe;