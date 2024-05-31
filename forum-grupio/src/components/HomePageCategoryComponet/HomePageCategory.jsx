import React from 'react';
import { FaComments } from 'react-icons/fa';
import styles from './HomePageCategory.module.css';

export function HomePageCategory({ subcategoryTitle, numberOfPosts, numberOfSetMessage, lastPostBy }) {
    return (
        <div className={styles.categoryWrapper}>
            <div className={styles.icon}>
                <FaComments />
            </div>
            <span className={styles.subCategoryTitle}>{subcategoryTitle}</span>
            <span className={styles.numberOfPosts}>Tópicos: {numberOfPosts}</span>
            <span className={styles.numberOfSetMessage}>Mensagens: <span>{numberOfSetMessage}</span></span>
            <span className={styles.lastPostBy}>
                {lastPostBy}
            </span>
        </div>
    );
}
