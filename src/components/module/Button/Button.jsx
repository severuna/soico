import React from 'react';
import style from './Button.module.css';

const Button = ( { variant, content, img, mini }) => {

    const setColor = () => {

        switch(variant) {

            case 'black': {
                return 'btn-black';
            }

            default: {
                return 'btn-white'
            }

        }
         
    }
    return (
        <button className={`${style.btn} row ${style[setColor()]} ${!mini ? null : style.mini}`}>
            {content}
            {!img ? null : <img src={img} alt='btn img' />}
        </button>
    );
};

export default Button;