import React from 'react';
import styles from './PostCard.module.css';

export default function PostCard ({ avatar, title, username, publicationDate, keywords, description, comments, likes, dislikes }) {
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;
    const isUserPost = username === 'user1'; // Caso o Post seja do usuario, Ele consegue visualiza o nº de dislikes.

    const commentsCount = comments?.length ?? 0;

    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={avatar} alt="Avatar" />
            <div className={styles.post}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.itemGroup}>
                    <div className={styles.itemGroup}>
                        <span className={styles.byUsername}>{username}</span>
                        <span className={styles.publicationDate}>{publicationDate}</span>
                    </div>
                    {keywords.map((keyword, index) => (
                        <span className={styles.keywordsTag} key={index}>{keyword}</span>
                    ))}
                </div>
                <span className={styles.description}>{truncatedDescription}</span>
            </div>
            <div className={styles.stats}>
                <span className={styles.commentsNums}>Comentarios: {commentsCount}</span>
                <span className={styles.likes}>Likes: {likes}</span>
                {isUserPost && <span className={styles.dislikes}>Dislikes: {dislikes}</span>}
            </div>
        </div>
    );
};
