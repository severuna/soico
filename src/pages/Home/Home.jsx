import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FavoriteProducts from './FavoriteProducts/FavoriteProducts';
import Categories from './Categories/Categories';
import About from './About/About';
import TextBanner from './TextBanner/TextBanner';
import WhyWe from './WhyWe/WhyWe';

const Home = () => {
    return (
        <div className='home column'>
            <Banner />
            <FavoriteProducts />
            <Categories />
            <About />
            <TextBanner />
            <WhyWe />
        </div>
    );
};

export default Home;