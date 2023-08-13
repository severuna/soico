import React from 'react';
import './About.css';
import Section from '../../../components/module/Section/Section';
import about__img from '../../../assets/img/home-about__img.png';

const About = () => {
    return (
        <Section title={'Трішки про нас'}
            content={
                <div className='home-about row'>
                    <div className='home-about__text column'>
                        <p className='home-about__text-item'>Привіт! Раді бачити тебе у нашій майстерні затишку і тепла! Ми ‒ SOICO, молодий бренд еко-свічок. Любимо природу і все, що з нею пов’язано. Вона дала нам можливість розробити екологічні свічки, у складі яких 100% натуральний соєвий віск та нереально круті і якісні ароматичні олії. Також ми постаралися розширити наш асортимент ароматів і форм, щоб знайти відгук у серці будь-якого клієнта.</p>
                        <p className='home-about__text-item'>Продукція бренду є виключно ручною роботою, тому кожна свічечка є зарядженою на позитив і спокій навіть в такий тяжкий час.</p>
                        <p className='home-about__text-item'>Тут ви можете знайти все для вашого затишку, створення приємної атмосфери, бо свічки  Soico ‒ це композиція віску та ароматів, що надихають і допомагають прикрасити особливі моменти вашого життя.</p>
                    </div>
                    <img src={about__img} alt='home about img' className='home-about__img' />
                </div>
            }
        />
    );
};

export default About;