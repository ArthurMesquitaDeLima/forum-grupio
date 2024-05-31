import React, { useState, useEffect } from 'react';
import PostsList from '../../components/PostsList';
import styles from './PostListPage.module.css';

export const PostsListPage = () => {
    const [topics, setTopics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch('https://forum-gamificado-default-rtdb.firebaseio.com/post.json')
            .then(response => response.json())
            .then(data => setTopics(data))
            .catch(error => console.error('Erro ao obter os dados:', error));
    }, []);

    const indexOfLastTopic = currentPage * 10;
    const indexOfFirstTopic = indexOfLastTopic - 10;
    const currentTopics = topics.slice(indexOfFirstTopic, indexOfLastTopic);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ultimos posts</h1>
            <PostsList topics={currentTopics} />
            <ul className={styles.paginationList}>
                {topics.length > 10 ? (
                    [...Array(Math.ceil(topics.length / 10))].map((_, index) => (
                        <li key={index} className={`${styles.pageItem} ${currentPage === index + 1 ? styles.active : ''}`}>
                            <button className={styles.pageButton} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))
                ) : (
                    <span>Carregando...</span>
                )}
            </ul>
        </div>
    );
};