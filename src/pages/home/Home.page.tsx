import React from 'react';

import { containerStyle } from './Home.config';

import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.container} style={containerStyle}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>Simple Task Management Panel</h1>
    </div>
  </div>
);

export default HomePage;
