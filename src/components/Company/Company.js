import React from 'react';
import image1 from '../../images/company/image1.png';
import image2 from '../../images/company/image2.png';
import CompanyOffices from '../CompanyOffices/CompanyOffices';
import './Company.css'

const Company = () => {
    return (
        <div>
            <div className="company-banner">
                <div>
                    <h1 className="company-banner-title">Connecting people <br /> with knowledge</h1>
                </div>
                <div>
                    <img src={image1} alt="" />
                </div>
            </div>
            <div className="origin-text">
                <h1>Our origins</h1>
                <p>Growing up in a small Turkish village, Edu Care founder Eren Bali had few educational opportunities — until he got a computer. Fueled by his dream to compete in mathematics, he used the internet to learn his way to a silver medal in the International Math Olympiad.</p>
                <p>After learning online changed his life, Eren partnered with co-founders Oktay Caglar and Gagan Biyani to achieve a common goal: to make quality education accessible to all.</p>
            </div>
            <div className="started-company">
                <div>
                    <img src={image2} alt="" />
                </div>
                <div className="started-company-text">
                    <h1>How We Start</h1>
                    <p>From an early age, edu care founder knew learning was the key to unlocing oppurtunity</p>
                </div>
            </div>
            <div className="our-office">
                <h1 className="origin-text">Our Offices</h1>
                <CompanyOffices></CompanyOffices>
            </div>
            <div className="company-partnership-container">
                <h5><small>For partnership and business development inquiries, please contact us at <span className="company-email">bizdev@udemy.com</span></small></h5>
                <br />
                <h5><small>Check out our <span className="company-email">Help and Support</span> center to find quick answers to your questions.</small></h5>
            </div>
        </div>
    );
};

export default Company;