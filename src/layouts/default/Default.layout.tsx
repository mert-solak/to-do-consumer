import React from 'react';

import { Header } from '../../components';
import { Props } from './Default.config';

import styles from './Default.module.scss';

const DefaultLayout: React.FC<Props> = ({ children, userName }) => (
  <div className={styles.container}>
    <Header userName={userName} />
    <div className={styles.content}>{children}</div>
  </div>
);

export default DefaultLayout;
