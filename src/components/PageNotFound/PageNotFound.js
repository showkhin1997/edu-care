import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pageNotFoundImg from '../../images/pageNotFound.png';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <img className="page-not-found-img" src={pageNotFoundImg} alt="" />
            <div className="page-not-found-text-btn">
                <h1>Page Not Found</h1>
                <p>Please try searching for some other page</p>
                <Link to="/home">
                    <Button variant="primary">Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;