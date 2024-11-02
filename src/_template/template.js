import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function Template() {
    return (
        <div className="container">
            <Header />
            <main className="body">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Template;
