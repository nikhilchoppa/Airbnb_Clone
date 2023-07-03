import React, { useEffect, useState } from 'react';
import styles from './PostView.module.css';

export default function PostView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/user')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className={styles.postsContainer}>
      <img className={styles.logo} src='https://ccsonc.org/wp-content/uploads/2017/06/instagram-logo.png' alt="User Avatar" />
      <span className={styles.avatar}>📷</span> {/* This will be the top left icon with text */}
      {data.map((post, index) => (
        <div key={index} className={styles.post}>
        <div className={styles.header}>
          <div className={styles.nameLocation}>
            <h2>{post.name}</h2>
            <h3>{post.location}</h3>
          </div>
          <span className={styles.threeDots}>...</span> {/* This is a placeholder for the three-dot icon */}
        </div>
        <img className={styles.image} src={post.PostImage} alt="post" />
        <div className={styles.actions}>
          <span className={styles.heart}>❤️ </span> {/* This is a placeholder for the heart icon */}
          <span className={styles.share}>🚀</span> {/* This is a placeholder for the rocket icon */}
          <p className={styles.date}>{post.date}</p>
        </div>
        <p className={styles.likes}>{post.likes} likes</p>
        <p className={styles.description}>{post.description}</p>
      </div>
      ))}
    </div>
  );
}
