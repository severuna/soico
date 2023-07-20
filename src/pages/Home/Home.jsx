import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import FavoriteProducts from './FavoriteProducts/FavoriteProducts';

const Home = () => {
    return (
        <div className='home column'>
            <Banner />
            <FavoriteProducts />
        </div>
    );
};

export default Home;