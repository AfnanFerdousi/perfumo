import React from 'react';
import About from '../About/About';
import CarouselSec from '../CarouselSec/CarouselSec';
import Items from '../Items/Items';
import Partners from '../Partners/Partners';
import './Home.css'

const Home = () => {
    return (
        <div>
            <CarouselSec></CarouselSec>
            <Partners></Partners>
            <About></About>
            <h2 className='text-center d-inline-block borderClass my-5'>Our Top Perfumes</h2>
            <Items></Items>

        </div>
    );
};

export default Home;