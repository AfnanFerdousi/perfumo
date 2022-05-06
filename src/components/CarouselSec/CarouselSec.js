import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../images/wave.svg'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'

const CarouselSec = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>WE ARE CREATIVE</h3>
                        <p>We Create Fragrance From The Blessing Mother Nature Gave us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We Create Top-Notch Fragrances</h3>
                        <p>Internatiol Perfume Academy Awarded Us as One of The Best Perfumists</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>We Have The Most Beautiful Packaging</h3>
                        <p>Our perfumists are dedicated not only to making perfumes, but also the packaging</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSec;