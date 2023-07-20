import React from 'react';
import './Banner.css';
import banner_img from '../../../assets/img/banner_img.png';
import arrow_right from '../../../assets/img/arrow_right.svg';
import Button from '../../../components/module/Button/Button';

const Banner = () => {
    return (
        <section className='banner column'>
            <img src={banner_img} alt='banner img' className='banner-img' />
            <div className='banner-content column'>
                <h1 className='banner-title'>Light me up!</h1>
                <p className='banner-subtitle'>Створи неповторну атмосферу завдяки нашим свічкам</p>
                <Button variant={'black'} content={'До каталогу'} img={arrow_right}/>
            </div>
        </section>
    );
};

export default Banner;