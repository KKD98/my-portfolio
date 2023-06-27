import React from 'react';
import NavBar from '../SharedComponent/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;