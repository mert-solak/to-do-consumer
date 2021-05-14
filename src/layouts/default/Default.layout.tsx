import React from 'react';

import { mount } from 'remote/header/headerApp';

import { Remote } from '../../components';

import styles from './Default.layout.module.scss';

const DefaultLayout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Remote mount={mount} />
    {children}
  </div>
);

export default DefaultLayout;
