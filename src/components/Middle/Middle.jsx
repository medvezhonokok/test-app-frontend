import React from 'react';
import "./Middle.css"
import rightArrow from "./../../assets/rightArrow.svg";
import EnergyBar from "../EnergyBar/EnergyBar";
import Information from "../Information/Information";
import MiningButton from "../MiningButton/MiningButton";

const Middle = () => {
    return (
        <div className='middle'>
            <div className='user-score-container'>
                <div className='user-score'>
                    <svg width="41" height="1" viewBox="0 0 41 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="40.5" y2="0.5" stroke="white" stroke-opacity="0.6"/>
                    </svg>
                    4,824
                    <svg width="41" height="1" viewBox="0 0 41 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="40.5" y2="0.5" stroke="white" stroke-opacity="0.6"/>
                    </svg>
                </div>
                <button className='activate-button'>
                    Activate passive mining
                    <img src={rightArrow} alt="logo"/>
                </button>
            </div>
            <EnergyBar/>
        </div>
    );
};

export default Middle;