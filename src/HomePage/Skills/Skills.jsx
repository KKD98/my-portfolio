import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css/animate.min.css";





const Skills = () => {
    AOS.init();
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("skills.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSkills(data);
            })
    }, [])

    return (
        <div className='w-full pt-16 bg-white' id='skills'>
            {/* <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-10'>---Skills---</p> */}
            <div className='ml-8'>
                        <p className='text-xl font-semibold text-pink-700 mb-4'>Skills</p>
                        <p className='text-4xl font-bold text-black mb-4'>Here is my all <span className='text-pink-700'>Skills</span></p>
                        <div className="divider w-16 bg-pink-700 h-1 mb-0"></div>
                        <div className="divider w-16 bg-pink-700 h-1 ml-4"></div>
                    </div>
            <div className='grid grid-cols-2 lg:grid-cols-7 gap-2 mx-auto w-full mb-4'>
                {
                    skills.map(skill => <div key={skill.name} data-aos="zoom-out" className='p-8 shadow-slate-600 shadow-md lg:mb-16 
                    w-48 md:w-36 mx-auto'><img src={skill.image} alt="" className='w-full' /> <p className='text-xl text-center font-semibold text-black mt-3'>{skill.name}</p></div>)
                }
            </div>
        </div>
    );
};

export default Skills;