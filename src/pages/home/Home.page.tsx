import React from 'react';

import styles from './Home.module.scss';

// TODO:Mert change background url
const HomePage = () => (
  <div className={styles.container}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Simple Task Management Panel</h1>
    </div>
  </div>
);

export default HomePage;
