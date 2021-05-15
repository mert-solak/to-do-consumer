import React from 'react';
import { useHistory } from 'react-router';

import { Button } from '@material-ui/core';

import { Props } from './Header.config';
import { routeConfig } from '../../configs';

import styles from './Header.module.scss';

export const Header: React.FC<Props> = ({ userName }) => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button
          className={styles.button}
          onClick={() => history.push(routeConfig.routes.myTasks)}
          color="primary"
        >
          My Tasks
        </Button>
        <Button
          className={styles.button}
          onClick={() => history.push(routeConfig.routes.tasks)}
          variant="outlined"
          color="secondary"
        >
          All Tasks
        </Button>
      </div>

      <div>
        <p>{userName}</p>
      </div>
    </div>
  );
};
