import React from 'react';
import CustomLink from './CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className="header" >
            <CustomLink  to={'/'}><h2>Home</h2></CustomLink>
            <CustomLink  to={'/AddContact'}><h2>Add a contact</h2></CustomLink>

        </div>
    );
};

export default Header;