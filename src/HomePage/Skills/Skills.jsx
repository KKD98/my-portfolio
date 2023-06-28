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
        <div className='w-full pt-12' id='skills'>
            <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-10'>---Skills---</p>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-3 w-full mb-4'>
                {
                    skills.map(skill => <div key={skill.name} data-aos="zoom-out" className='p-6 shadow-slate-300 shadow-md lg:mb-16 w-52 mx-auto'><img src={skill.image} alt="" className='w-full' /> <p className='text-2xl text-center font-semibold text-black mt-3'>{skill.name}</p></div>)
                }
            </div>
        </div>
    );
};

export default Skills;