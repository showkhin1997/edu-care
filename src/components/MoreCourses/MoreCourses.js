import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MoreCourse from '../MoreCourse/MoreCourse';

const MoreCourses = () => {
    const [morecourses, setMoreCourses] = useState([]);

    useEffect(() => {
        fetch('./morecourses.json')
            .then(res => res.json())
            .then(data => setMoreCourses(data))
    }, []);

    return (
        <div className="home-card-container">
            <h1>Find The Right
                Online Course For You</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    morecourses.map(morecourse => <MoreCourse
                        key={morecourse.id}
                        morecourse={morecourse}
                    ></MoreCourse>)
                }
            </Row>
        </div>
    );
};

export default MoreCourses;