import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Catalogue from './pages/Catalogue/Catalogue';
import Flavors from './pages/Flavors/Flavors';
import Sales from './pages/Sales/Sales';
import Delivery from './pages/Delivery/Delivery';
import Bag from './pages/Bag/Bag';
import Navbar from './components/Navbar/Navbar';

const Main = () => {
    return (
        <main className='main column'>
            <Navbar />
            <Routes>
                <Route path='/soico' element={<Home />} />
                <Route path='/soico/about' element={<About />} />
                <Route path='/soico/catalogue' element={<Catalogue />} />
                <Route path='/soico/flavor' element={<Flavors />} />
                <Route path='/soico/sales' element={<Sales />} />
                <Route path='/soico/delivery' element={<Delivery />} />
                <Route path='/soico/bag' element={<Bag />} />
            </Routes>
        </main>
    );
};

export default Main;