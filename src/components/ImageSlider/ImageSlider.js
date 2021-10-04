import React from 'react';
import { Carousel } from 'react-bootstrap';
import aboutImage1 from '../../images/about/1.jpg';
import aboutImage2 from '../../images/about/2.jpg';
import aboutImage3 from '../../images/about/3.jpg';
import './ImageSlider.css'

const ImageSlider = () => {
    return (
        <Carousel className="p-5 m-3 w-75 mx-auto">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={aboutImage1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={aboutImage2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={aboutImage3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageSlider;