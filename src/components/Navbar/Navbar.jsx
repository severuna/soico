import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/img/logo.svg';
import bag from '../../assets/img/bag.svg';

const Navbar = () => {

    useEffect(() => {
        console.log('page load');
    }, []);

    return (
        <header className='header row'>
            <Link to='soico' className='logo'>
                <img src={logo} alt='logo' className='logo-img' />
            </Link>
            <nav className='nav row'>
                <Link to='soico/about' className='header-nav__item'>Про нас</Link>
                <Link to='soico/catalogue' className='header-nav__item'>Каталог</Link>
                <Link to='soico/flavor' className='header-nav__item'>Аромати</Link>
                <Link to='soico/sales' className='header-nav__item'>Акції</Link>
                <Link to='soico/delivery' className='header-nav__item'>Доставка і оплата</Link>
            </nav>
            <Link to='soico/bag' className='bag-logo'>
                <img src={bag} alt='logo' className='bag-logo__img' />
            </Link>
        </header>
    );
};

export default Navbar;