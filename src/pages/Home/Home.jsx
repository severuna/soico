import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FavoriteProducts from './FavoriteProducts/FavoriteProducts';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='home column'>
            <Banner />
            <FavoriteProducts />
            <Categories />
        </div>
    );
};

export default Home;