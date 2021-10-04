import React from 'react';
import './Catagories.css';

const Catagories = () => {
    return (
        <div className="catagories-container">
            <h1>Top Catagories</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-database catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Data Science</h5>
                            <p className="card-text text-center">Data is everything</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-business-time catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Business</h5>
                            <p className="card-text text-center">Improve your business</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-paint-brush catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Art and Design</h5>
                            <p className="card-text text-center">Fun with Challenging</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fab fa-shopify catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Marketing</h5>
                            <p className="card-text text-center">Improve your knowledge</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-music catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Music</h5>
                            <p className="card-text text-center">Major or Minor</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0">
                        <i className="fas fa-laptop-code catagories-icon"></i>
                        <div className="card-body">
                            <h5 className="card-title text-center">Programming</h5>
                            <p className="card-text text-center">Code never lie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagories;