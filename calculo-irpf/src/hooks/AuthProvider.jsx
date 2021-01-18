import React, {
  createContext, useCallback, useContext,
} from 'react';
import { useUser } from '../components/core/UserProvider/useUser';
import { LOCAL_STORAGE_KEYS } from '../constants';
// api connection
import { apiIRPF } from '../services';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { setUser, clearUser } = useUser();

  const login = useCallback(
    async (username, password) => {
      const authResponse = await apiIRPF.userRoutes.login(username, password);
      localStorage.setItem(LOCAL_STORAGE_KEYS.userAuthToken, authResponse);

      if (authResponse) {
        const userResponse = await apiIRPF.userRoutes.getByUserName(username, authResponse);
        const userContext = { ...userResponse, token: authResponse };

        setUser(userContext);
        console.log('userContext', userContext);
      }

      return authResponse;
    },
  );

  const logout = useCallback(() => {
    clearUser();
    localStorage.clear();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth error');
  }
  return context;
}

export { AuthProvider, useAuth };
