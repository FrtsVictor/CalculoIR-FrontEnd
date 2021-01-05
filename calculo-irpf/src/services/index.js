import axios from 'axios';

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
      return console.log(error);
    }
  }
};
