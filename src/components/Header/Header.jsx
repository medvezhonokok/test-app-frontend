import React from 'react';
import cross from "../../assets/cross.svg";
import downArrow from "../../assets/downArrow.svg";
import dots from "../../assets/dots.svg";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <button className='common-button close-button'>
                <img src={cross} alt={"logo"}/>
                <span>Close</span>
            </button>

            <button className='common-button trailing-button'>
                <img src={downArrow} alt="downArrow"/>
                <img src={dots} alt="downArrow"/>
            </button>
        </div>
    );
};

export default Header;