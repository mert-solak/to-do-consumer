import React from 'react';

import { mount } from 'remote/identification/identificationApp';

import { Remote } from '../../components';

import styles from './Identification.page.module.scss';

const IdentificationPage = () => (
  <div className={styles.container}>
    <Remote mount={mount} />
  </div>
);

export default IdentificationPage;
