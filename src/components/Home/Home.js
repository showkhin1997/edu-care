import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import './Home.css';
import teacherimage from '../../images/teachingImage.png';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Courses></Courses>
            <div className="teaching-container">
                <div className="teaching-text">
                    <h1>Become an instructor</h1>
                    <p>Instructors from around the world teach millions of students on Edu Care. We provide the tools and skills to teach what you love.</p>
                    <Button variant="primary">Start Teaching Today</Button>
                </div>
                <div>
                    <img className="teaching-img" src={teacherimage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;