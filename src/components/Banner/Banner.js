import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import header from '../../images/header.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div>
                    <h1 className="banner-title">Always <span className="smoething-text">Something</span> new <br /> to learn with us</h1>
                    <p className="banner-text">With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
                    <Link to="/morecourses">
                        <Button className="course-btn" variant="primary">Course</Button>
                    </Link>
                </div>
                <div>
                    <img className="banner-image" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;