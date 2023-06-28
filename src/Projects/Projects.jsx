import React from 'react';
import MusicMentor from '../HomePage/MusicMentor/MusicMentor';
import DisneyWorld from '../HomePage/DisneyWorld/DisneyWorld';

const Projects = () => {
    return (
        <div className='w-full py-12' id='projects'>
        <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-16'>---Projects---</p>
        <MusicMentor></MusicMentor>
        <div className="divider"></div> 
        <DisneyWorld></DisneyWorld>
        </div>
    );
};

export default Projects;