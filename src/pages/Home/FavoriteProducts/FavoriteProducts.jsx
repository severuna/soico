import React from 'react';
import './FavoriteProducts.css';
import { useCandles } from '../../../store';
import Section from '../../../components/module/Section/Section';
import SectionList from '../../../components/module/SectionList/SectionList';
import ItemMini from '../../../components/ItemMini/ItemMini';

const FavoriteProducts = () => {
    const CLASSIC_LIST = useCandles(state => state.classic)

    let elements = [];
    CLASSIC_LIST.forEach(element => {
        if (element.id < 4) {
            elements.push(<ItemMini key={element.id} {...element} />)
        }
    })
    return (
        <Section title={'Найулюбленіші товари'} content={
            <>
                <SectionList content={elements} />
            </>
        }
        />
    );
};

export default FavoriteProducts;