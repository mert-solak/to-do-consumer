import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '@material-ui/core';

import { Props } from './Header.config';

import styles from './Header.module.scss';

export const Header: React.FC<Props> = ({ userName }) => (
  <div className={styles.container}>
    <div />

    <div>
      <p>{userName}</p>
    </div>
  </div>
);
