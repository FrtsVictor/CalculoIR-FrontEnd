import React from 'react';
import { UserProvider } from '../components/core/UserProvider/UserProvider';
import { AuthProvider } from './AuthProvider';

export const AppProvider = ({ children }) => (
  <UserProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </UserProvider>

);
