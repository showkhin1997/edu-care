import React from 'react';
import './Banner.css';
import header from '../../images/header.png';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div>
                    <h1 className="banner-title">Always something new to learn with Us</h1>
                    <p className="banner-text">With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
                </div>
                <div>
                    <img className="banner-image" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;