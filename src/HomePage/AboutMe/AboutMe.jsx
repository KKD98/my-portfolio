import React from 'react';
import img from '../../assets/myimg.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload , FaAngleDoubleRight} from 'react-icons/fa';
import resume from '../../../src/assets/KajolKonaDattaResume.pdf';

const AboutMe = () => {
    AOS.init();
    return (
        <div id='about' className='py-16 mb-8 bg-white'>

            <div className='py-16 w-[70%] mx-auto flex flex-col lg:flex-row-reverse justify-between items-center'>
                <div className='w-full' data-aos="flip-right"
                    data-aos-duration="1500">
                    <img className='rounded-full w-full lg:w-[80%]  lg:p-5 mx-auto' src={img} alt="" />
                </div>
                <div className='my-3 w-full flex flex-col gap-4'>
                    <div>
                        <p className='text-xl font-semibold text-pink-700 mb-4'>About Me</p>
                        <p className='text-4xl font-bold text-black mb-4'>I am a Junior <span className='text-pink-700'>React Js</span> Developer</p>
                        <div className="divider w-[10%] bg-pink-700 h-1 mb-0"></div>
                        <div className="divider w-[10%] bg-pink-700 h-1 ml-4"></div>
                    </div>
                    <p className='text-xl  text-gray-600 font-semibold'><span className='text-2xl'>H</span>ello, This is Kajol Kona Datta from Bangladesh. I have pursued a B.Sc. in Computer Science & Engineering. At this moment in time, I am looking fora job as a Front-end developer. I am a quick learner. I never give up until I get something right and, I am a lifetime learner.</p>
                    <div>
                        <a href={resume} download="Kajol_Kona_Datta.pdf" className="btn  bg-pink-700 hover:bg-pink-800 hover:border-2 text-black">
                            <FaDownload />
                            Resume
                        </a>
                        <a
                            href="#contact"
                           className='btn bg-white text-gray-700 hover:bg-white border-none ml-4'
                        >
                            Contact Me <FaAngleDoubleRight></FaAngleDoubleRight>
                        </a>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AboutMe;