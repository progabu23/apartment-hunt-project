import React from 'react';
import HeaderMiddle from './HeaderMiddle';
import Nav from './Nav';
import './Header.css'


const Header = () => {
    return (
        <>
            <Nav></Nav>
            <div className="header-bg">
                <HeaderMiddle></HeaderMiddle>
            </div>
        </>
    );
};

export default Header;