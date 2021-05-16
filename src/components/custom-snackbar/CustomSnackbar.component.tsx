import React, { useState, SyntheticEvent, useEffect } from 'react';

import { Snackbar } from '@material-ui/core';

import { Props } from './CustomSnackbar.config';

export const CustomSnackbar: React.FC<Props> = ({ listenErrors }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const listener = (errorMessage: string) => {
    setMessage(errorMessage);
    setIsOpen(true);
  };

  useEffect(() => {
    listenErrors(listener);
  }, []);

  // @ts-ignore
  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} message={message} />;
};
