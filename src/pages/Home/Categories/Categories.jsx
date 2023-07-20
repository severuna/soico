import React from 'react';
import './Categories.css';
import Section from '../../../components/module/Section/Section';
import SectionList from '../../../components/module/SectionList/SectionList';
import { useCandles } from '../../../store';
import CategoriesItem from './CategoriesItem/CategoriesItem';

const Categories = () => {
    const CANDLES_LIST = useCandles(state => state);
    const aroma = CANDLES_LIST.aroma[1].src;
    const forms = CANDLES_LIST.forms[0].src;
    const classic = CANDLES_LIST.classic[0].src;

    let elements = [];
    let elementsTitle = ['Класичні та масажні свічки', 'Аромасаше та дифузори', 'Формові свічки та аксесуари'];
    elements.push(<CategoriesItem key={Math.random() * 3} title={elementsTitle[0]} src={classic} />);
    elements.push(<CategoriesItem key={Math.random() * 3} title={elementsTitle[1]} src={aroma} />);
    elements.push(<CategoriesItem key={Math.random() * 3} title={elementsTitle[2]} src={forms}/>);

    return (
        <Section variant={'black'} title={'Категорії'} content={
            <>
                <SectionList content={elements} />
            </>
        } />
    );
};

export default Categories;