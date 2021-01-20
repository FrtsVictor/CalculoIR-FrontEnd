import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { useUser } from '../components/core/UserProvider/useUser';

export const api = axios.create({
  baseURL: 'http://localhost:8080/v1/',
  // baseURL: 'https://calc-irpf.herokuapp.com/',
  headers: { Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthToken)}` },
})
;

export const apiLogin = axios.create({
  baseURL: 'http://localhost:8080/v1/'
  // baseURL: 'https://calc-irpf.herokuapp.com//'
});


export const apiIRPF = {

  calculte: {
    IRFP: async (user, token) => {
      try {
        const { data } = await api.post('calculate/irpf', {
          ...user
        },
        {
          headers: { Authorization: `Bearer ${token}`
        }
        });
        return data;
      } catch (error) {
        console.log('error response', error.response);
        return error.response;
      }
    },
    INSS: async (user, token) => {
      try {
        const { data } = await api.post('calculate/inss',{
            ...user
          }, {
          headers: { Authorization: `Bearer ${token}`
        },
        });
        console.log('dataINSS', data);
        return data;
      } catch (error) {
        console.log('error response', error.response);
        return error.response;
      }
    },
    IRRF: async (user, token) => {
      try {
        const { data } = await api.post('calculate/irrf', {
          ...user
        },
        {
          headers: { Authorization: `Bearer ${token}`
        }
        });
        return data;
      } catch (error) {
        console.log('error response', error.response);
        return error.response;
      }
    },
    SalLiq: async (user, token) => {
      try {
        const { data } = await api.post('calculate/salario-liq', {
          ...user
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        );
        return data;
      } catch (error) {
        console.log('error response', error.response);
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
        return data;
      } catch (error) {
        console.log(error.response);
        return error.response;
      }
    },
    login: async (username, password) => {
      try {
        const { data } = await apiLogin.post('authenticate', {
          username, password,
        });
        return data.token;
      } catch (error) {
        if (error.response.status === 401) {
          console.log("Ops!', 'username ou senha invalidos', 'error");
        }
        console.log(error);
        return error.response;
      }
    },
    getByUserName: async (username, token) => {
      try {
        const { data } = await apiLogin.get(`users/username/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return data;
      } catch (error) {
        if (error.response.status === 404) {
          console.log('Ops!', 'username invalido', 'error');
        }
        return console.log(error);
      }
    },
    update: async (user, token) => {
      try {
        const resp = await apiLogin.put('users', user, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return resp;
      } catch (error) {
        console.log(error.response)
        return error.response;
      }
    },
  }
};


export const verifyApiErrors = (data) => {
  if (data.status === 401) {
    return ' * Voce precisa estar autenticado';
  }

  if (data.status === 400) {
    return ' * Dados incorretos';
  }

  if (data.status === 403) {
    return ' * Login expirado';
  }

  if (data.status > 403) {
    return ' * Ocorreu um erro interno no servidor';
  }
  return null;
};

export const verifyApiLoginErrors = (data) => {
  if (data.status === 400 && data.data.details === 'User already registered') {
    return ' * Usuario ja cadastrado';
  }

  if (data.status === 400) {
    return ' * Login ou senha invalidos';
  }

  if (data.status > 401) {
    return ' * Ocorreu um erro interno no servidor';
  }

  return null;
};
