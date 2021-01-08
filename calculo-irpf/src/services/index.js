/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import axios from 'axios';
// import { AlertMessage } from '../components/AlertMessage';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

export const apiIRPF = {
  calculateIRFP: async (user) => {
    try {
      const { data } = await api.post('api/calculate', {
        ...user
      });
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error.response);
    }
  },
  calculateINSS: async (user) => {
    try {
      const { data } = await api.post('api/calculate/inss', {
        ...user
      });
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error.response);
    }
  },
  calculateIRRF: async (user) => {
    try {
      const { data } = await api.post('api/calculate/irrf', {
        ...user
      });
      console.log(data);
      return data;
    } catch (error) {
      return console.log(error.response);
    }
  }
};
