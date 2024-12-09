import React from 'react';
import "./Information.css";
import MiningButton from "../MiningButton/MiningButton";

const Information = () => {
    return (
        <div className="information-container">
            <h1 className="container-header">Information</h1>
            <div className='information-main'>
                <div className="information-grid">
                    <div className='information-grid-line'>
                        <div className="information-item">
                            <span className="info-label">Block</span>
                            <span className="info-value">12345</span>
                        </div>
                        <div className="information-item">
                            <span className="info-label">Complexity</span>
                            <span className="info-value">1.9K</span>
                        </div>
                    </div>
                    <div className='information-grid-line'>
                        <div className="information-item">
                            <span className="info-label">Reward</span>
                            <span className="info-value">624</span>
                        </div>
                        <div className="information-item">
                            <span className="info-label">Online</span>
                            <span className="info-value">10K</span>
                        </div>
                    </div>
                </div>
                <div className="information-grid">
                    <div className='information-grid-line'>
                        <div className="information-item">
                            <span className="info-label">Status</span>
                            <span className="info-value">
                                <div className='status-button'>
                                    Waiting
                                </div>
                            </span>
                        </div>
                        <div className="information-item">
                            <span className="info-label">Shares</span>
                            <span className="info-value">0</span>
                        </div>
                    </div>
                    <div className='information-grid-line'>
                        <div className="information-item">
                            <span className="info-label">Hashes</span>
                            <span className="info-value">0</span>
                        </div>
                        <div className="information-item">
                            <span className="info-label">Income</span>
                            <span className="info-value">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <MiningButton/>
        </div>
    );
};

export default Information;
