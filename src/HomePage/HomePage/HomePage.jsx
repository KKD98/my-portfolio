import React from 'react';
import NavBar from '../../SharedComponent/NavBar/NavBar';
import Footer from '../../SharedComponent/Footer/Footer';
import Banner from '../Banner/Banner';

const HomePage = () => {
    return (
        <div>
        <NavBar></NavBar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;