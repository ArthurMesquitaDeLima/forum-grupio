import React, { useState, useEffect } from 'react';
import { HomePageCategory } from '../../components/HomePageCategoryComponet/HomePageCategory';
import styles from './HomePage.module.css';

export function HomePage() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetch('https://forum-gamificado-default-rtdb.firebaseio.com/category.json')
            .then(response => response.json())
            .then(data => setCategoryData(data))
            .catch(error => console.error('Erro ao carregar dados:', error));
    }, []);

    console.log(categoryData);
    return (
        <div className={styles.forum}>
            <h1 className={styles.title}>Explore novos assuntos</h1>
            {categoryData.length ? (
                categoryData.map((category, index) => (
                    <div className={styles.container} key={index}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        {category.subcategories.map((subcategory, subIndex) => (
                            <HomePageCategory key={subIndex} {...subcategory} />
                        ))}
                    </div>
                ))
            ) : (
                <span>Carregando...</span>
            )}
        </div>
    );
}
