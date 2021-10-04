
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';


const Header = () => {

    return (
        <div>
            <nav>
                <img className="header-logo" src={logo} alt="" />
                <h1 className="site-title">Edu <span>Care</span></h1>
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/morecourses">More Courses</Link>
                <Link className="nav-link" to="/about">About Us</Link>
                <InputGroup className="mb-3 w-25 m-auto mt-2 ml-5">
                    <FormControl
                        placeholder="search your course"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" >
                        Search
                    </Button>
                </InputGroup>
            </nav>

        </div>
    );
};

export default Header;