import React from 'react';
import styles from './Section.module.css';

const Section = ( { variant, content, title }) => {
    
    const setColor = () => {

        switch(variant) {

            case 'black': {
                return 'section-black';
            }

            default: {
                return 'section-white'
            }

        }
         
    }
    return (
        <section className={`${styles.section} column ${styles[setColor()]}`}>
            <h2 className={`${styles.title}`}>{title}</h2>
            {content}
        </section>
    );
};

export default Section;