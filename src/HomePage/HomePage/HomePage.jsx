import React from 'react';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import Footer from '../../SharedComponent/Footer/Footer';
import Projects from '../../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';

const HomePage = () => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;