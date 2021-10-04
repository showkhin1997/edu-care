import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./homepagedata.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="home-card-container">
            <h1>Explore Our Popular Courses</h1>

            <Row xs={1} md={2} className="g-5">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div >
    );
};

export default Courses;