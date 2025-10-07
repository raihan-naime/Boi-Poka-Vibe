import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar/>
            <main className='max-w-7xl mx-auto min-h-[calc(100vh-285px)]'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;