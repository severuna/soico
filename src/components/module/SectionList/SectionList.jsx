import React from 'react';
import styles from './SectionList.module.css'

const SectionList = ( { content }) => {
    return (
        <div className={`${styles.list} row`}>
            {content}
        </div>
    );
};

export default SectionList;