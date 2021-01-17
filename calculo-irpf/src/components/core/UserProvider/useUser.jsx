/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import { UserContext } from './UserProvider';

export const useUser = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('In order to use this hook, make sure to be under thes UserProvider');
  }

  return user;
};
