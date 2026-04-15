import React from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import { Outlet } from 'react-router';
import FriendsPage from '../Pages/FriendsPage/FriendsPage';
import Navbar from '../Components/Navbar/Shared/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;