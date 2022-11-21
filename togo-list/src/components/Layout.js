import React from 'react';
import Header from './Header';
import {Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
          <main>
            <Outlet/>
          </main>
          <footer>
            
          </footer>
        </>
    );
};

export default Layout;