import React from 'react';
import MusicMentor from '../HomePage/MusicMentor/MusicMentor';
import DisneyWorld from '../HomePage/DisneyWorld/DisneyWorld';
import MixedMasala from '../HomePage/MixedMasala/MixedMasala';
import { Link } from 'react-router-dom';
import CareerMaker from '../CareerMaker/CareerMaker';

const AllProjects = () => {
    return (
        <div className='w-full py-4'>
        {/* <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-16'>---Projects---</p> */}
        <div className='ml-8'>
                        <p className='text-xl font-semibold text-pink-700 mb-4'>All Projects</p>
                        <p className='text-4xl font-bold text-black mb-4'>Here is my all <span className='text-pink-700'>Projects</span></p>
                        <div className="divider w-16 bg-pink-700 h-1 mb-0"></div>
                        <div className="divider w-16 bg-pink-700 h-1 ml-4"></div>
                    </div>
        <MusicMentor></MusicMentor>
        <div className="divider"></div> 
        <DisneyWorld></DisneyWorld>
        <div className="divider"></div> 
        <MixedMasala></MixedMasala>
        <div className="divider"></div> 
        <CareerMaker></CareerMaker>
        <div className='flex justify-center'>
            <a href="/#home"><button className='btn  bg-pink-700 hover:bg-pink-800 text-black'>Back To Home</button></a>
        </div>
        </div>
    );
};

export default AllProjects;