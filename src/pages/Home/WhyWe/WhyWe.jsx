import React from 'react';
import './WhyWe.css';
import Section from '../../../components/module/Section/Section';
import SectionList from '../../../components/module/SectionList/SectionList';
import why_1 from '../../../assets/img/why_1.svg';
import why_2 from '../../../assets/img/why_2.svg';
import why_3 from '../../../assets/img/why_3.svg';
import why_4 from '../../../assets/img/why_4.svg';

const WhyWe = () => {

    const WhyWeData = [
        {
            id: 0,
            title: 'Екологічність',
            subtitle: 'Соєвий віск не є продуктом нафтопереробки',
            src: why_1,
        },
        {
            id: 1,
            title: 'Різномаїття ароматів',
            subtitle: 'В нашому магазині 28 ароматів, на будь який смак та настрій',
            src: why_2,
        },
        {
            id: 2,
            title: 'Якісна продукція',
            subtitle: 'Лише краща сировина Всі матеріали мають сертифікати якості',
            src: why_3,
        },
        {
            id: 3,
            title: 'Деревяний гніт',
            subtitle: 'Потріскує під час горіння, створюючи затишну атмосферу',
            src: why_4,
        },
    ];

    let elements = [];

    WhyWeData.forEach((elem) => {
        elements.push(<div key={elem.id} className='why-item column'>
            <img src={elem.src} alt={elem.title} className='why-item__img' />
            <h3 className='why-item__title'>{elem.title}</h3>
            <p className='why-item__subtitle'>{elem.subtitle}</p>
        </div>)
    })

    return (
        <Section title={'Чому обирають нас?'}
            content={
                <SectionList content={elements} />
            }
        />
    );
};

export default WhyWe;