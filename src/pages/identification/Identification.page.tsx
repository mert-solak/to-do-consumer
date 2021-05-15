import React from 'react';

import { Props } from './identification.config';

import { UserForm } from '../../components';
import { urlConfig } from '../../configs';

import styles from './identification.module.scss';

const IdentificationPage: React.FC<Props> = ({ setUserName }) => (
  <div className={styles.container}>
    <img className={styles.todoImage} src={`${urlConfig.urls.api}/images/to-do.jpg`} alt="todo" />
    <UserForm setUserName={setUserName} />
  </div>
);

export default IdentificationPage;
