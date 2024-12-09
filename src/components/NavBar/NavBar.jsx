import React from 'react';
import lightning from "./../../assets/lightning.svg";
import boost from "./../../assets/boost.svg";
import stats from "./../../assets/stats.svg";
import token from "./../../assets/token.svg";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className='navbar'>
            <a className='active menu-button'>
                <img src={lightning} alt='lightning'/>Mining
            </a>
            <a className='menu-button'>
                <img src={boost} alt='boost'/>Boost
            </a>
            <a className='menu-button'>
                <img src={stats} alt='boost'/>Statistics
            </a>
            <a className='menu-button'>
                <img src={token} alt='boost'/>Token
            </a>
        </div>
    );
};

export default NavBar;