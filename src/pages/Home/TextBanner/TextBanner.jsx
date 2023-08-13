import React from 'react';
import './TextBanner.css';

const TextBanner = () => {

    const TextContent = [
        `500+ 
        Свічок 
        виготовлено`, 
        `28+ 
        Ароматів`, 
        `320+ 
        Задоволених 
        клієнтів`
    ];
    let elements = [];

    TextContent.forEach((element) => {
        elements.push(<p className='home-text__item'>{element}</p>)
    })

    return (
        <div className='home-text row'>
            {elements}
        </div>
    );
};

export default TextBanner;