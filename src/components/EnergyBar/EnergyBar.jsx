import React from 'react';
import './EnergyBar.css';

const EnergyBar = () => {
    return (
        <div className="energy-bar-container">
            <div className="energy-bar-label">
                <span>Energy</span>
                <span>950 / 1000 xp</span>
            </div>
            <div className="energy-bar-progress">
                <div className="energy-bar-fill"></div>
            </div>
        </div>
    );
};

export default EnergyBar;
