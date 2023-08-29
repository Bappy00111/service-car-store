import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sheared/Footer/Footer';
import Navber from '../pages/Sheared/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;