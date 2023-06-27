import React from 'react';

const SkillAndEducation = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className='text-black border-double border-4 border-black w-[40%] mt-6 mb-4 p-3 mx-auto'>
                <p className='text-3xl font-semibold '>My Skills</p>
            </div>
            <div className="divider md:divider-horizontal"></div> 
            <div className='text-black border-double border-4 border-black w-[40%] mt-6 mb-4 p-3 mx-auto'>
                <p className='text-3xl font-semibold mb-3'>Education</p>
                <p className='text-2xl font-semibold '>University - <span className='text-lg'>Metropolitan University Sylhet(2017-2021)</span></p>
                <p className='text-2xl font-semibold '>Collage - <span className='text-lg'>Govt. Agragami Girls High School & Collage(2014-2016)</span></p>
                <p className='text-2xl font-semibold '>School - <span className='text-lg'>Govt. Agragami Girls High School & Collage(2006-2014)</span></p>
            </div>
        </div>
    );
};

export default SkillAndEducation;