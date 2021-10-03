
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div>
            <nav>
                <img src="" alt="" />
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/courses">Courses</Link>
                <Link className="nav-link" to="/about">About</Link>
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