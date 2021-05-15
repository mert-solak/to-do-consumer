import React, { ChangeEvent, FormEventHandler, useState } from 'react';

import { TextField, Button } from '@material-ui/core';

import { Props } from './UserForm.config';
import { userDefinitions } from '../../definitions';

import styles from './UserForm.module.scss';

export const UserForm: React.FC<Props> = ({ setUserName }) => {
  const [inputValue, setInputValue] = useState<userDefinitions.UserName>();

  const handleOnClickSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (inputValue) {
      setUserName(inputValue);
    }

    event.preventDefault();
  };

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleOnClickSubmit}>
        <TextField
          fullWidth
          required
          onChange={handleOnChangeInput}
          variant="outlined"
          label="Pick A User Name"
        />
        <br />
        <Button type="submit" variant="outlined" color="primary">
          Pick
        </Button>
      </form>
    </div>
  );
};
