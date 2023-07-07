import React from 'react';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import Footer from '../../SharedComponent/Footer/Footer';
import Projects from '../../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const HomePage = () => {
    
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;