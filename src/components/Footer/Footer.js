
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <h1 className="footer-title"><span>Edu</span> Care</h1>
                <div className="footer-body">
                    <div className="fab-icon">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram-square"></i>
                    </div>
                    <div>
                        <div className="subscibe-input-field">
                            <h4>Subscribe Please</h4>
                            <InputGroup className="mb-2  m-auto mt-2 ml-5">
                                <FormControl
                                    placeholder="Your email address"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="primary" >
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                        <p className="footer-body-text">About Us</p>
                        <p className="footer-body-text">Courses</p>
                        <p className="footer-body-text">Events</p>
                        <p className="footer-body-text">Instructor</p>
                        <p className="footer-body-text">Contact</p>
                        <p className="copyright-text">© 2022 Edu Care, All Rights
                            Reserved. Design By Showkhin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;