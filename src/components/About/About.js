import React from 'react';
import { Button } from 'react-bootstrap';
import aboutImage from '../../images/about.png';
import ImageSlider from '../ImageSlider/ImageSlider';
import sponserImage from '../../images/about/sponser.png';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-text">About</h1>
            <div className="about-banner-container">
                <div>
                    <h1>We share knowledge with the world</h1>
                    <Button className="about-btn" variant="primary">Join with us</Button>
                </div>
                <div>
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            <div className="more-details">
                <h1>Changing learning for the better</h1>
                <h6>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</h6>
            </div>
            <ImageSlider></ImageSlider>
            <div>
                <img className="sponser-image" src={sponserImage} alt="" />
            </div>
        </div>
    );
};

export default About;