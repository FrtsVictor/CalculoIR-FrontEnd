/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import axios from 'axios';
// import { AlertMessage } from '../components/AlertMessage';
import { LOCAL_STORAGE_KEYS } from '../constants';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthToken)}` },
});

export const apiLogin = axios.create({
  baseURL: 'http://localhost:8080/'
});

export const verifyApiErrors = (data) => {
  if (data.status === 401) {
    return 'Voce precisa estar autenticado';
  }

  if (data.status === 400) {
    return 'Verifique seus dados';
  }

  if (data.status > 401) {
    return 'Ocorreu um erro interno no servidor';
  }
  return null;
};

export const apiIRPF = {

  calculte: {
    IRFP: async (user) => {
      try {
        const { data } = await api.post('api/calculate', {
          ...user
        });
        console.log(data);
        return data;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    },
    INSS: async (user) => {
      try {
        const { data } = await api.post('api/calculate/inss', {
          ...user
        });
        console.log('dataINSS', data);
        return data;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    },
    IRRF: async (user) => {
      try {
        const { data } = await api.post('api/calculate/irrf', {
          ...user
        });
        console.log(data);
        return data;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    }
  },
  userRoutes: {
    register: async (user) => {
      try {
        const { data } = await apiLogin.post('register', {
          ...user
        });
        console.log(data);
        return data;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    },
    login: async (username, password) => {
      try {
        const { data } = await apiLogin.post('/authenticate', {
          username, password,
        });
        console.log(data);
        return data.token;
      } catch (error) {
        if (error.response.status === 401) {
          console.log("Ops!', 'username ou senha invalidos', 'error");
        }
        console.log(error);
        return null;
      }
    },
    getByUserName: async (username) => {
      try {
        const { data } = await api.get(`/users/username/${username}`);
        return data;
      } catch (error) {
        if (error.response.status === 404) {
          console.log('Ops!', 'username invalido', 'error');
        }
        return console.log(error);
      }
    },
  }
};
