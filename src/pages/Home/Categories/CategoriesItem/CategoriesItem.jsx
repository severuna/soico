import React from 'react';
import './CategoriesItem.css';
import { Link } from 'react-router-dom';

const CategoriesItem = ( props ) => {
    return (
        <Link className='categories-item column' to='' style={{backgroundImage:`url(${props.src})`}}>
            <h2 className='categories-item__title'>{props.title}</h2>
        </Link>
    );
};

export default CategoriesItem;