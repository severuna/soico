import React from 'react';
import './ItemMini.css';
import like from '../../assets/img/like.svg';
import Button from '../module/Button/Button';

const ItemMini = ( props ) => {
    
    const ITEM = {...props};

    return (
        <div className='item-mini column'>
            <div className='item-mini__main column'>
                <img src={ITEM.src} alt={ITEM.name} className='item-mini__img' />
                <div className='item-mini_title row'>
                    <p className='item-mini__name'>{ITEM.name}, {ITEM.volume}мл</p>
                    <button className='item-mini_like'>
                        <img src={like} alt='like'/>
                    </button>
                </div>
            </div>
            <div className='item-mini__footer row'>
                <h3 className='item-mini__price'>{ITEM.price}грн</h3>
                <Button mini={true} variant={'black'}content={'Купити'} />
            </div>
        </div>
    );
};

export default ItemMini;