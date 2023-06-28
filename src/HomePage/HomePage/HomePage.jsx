import React from 'react';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import Footer from '../../SharedComponent/Footer/Footer';
import Projects from '../../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';

const HomePage = () => {
    
    return (
        <div>
        <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;