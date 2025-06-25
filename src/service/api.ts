import axios from 'axios';

const token = localStorage.getItem('jwtToken') || 'no token';

export const apiAuth = axios.create({

  baseURL: import.meta.env.VITE_API_URL,
  headers: {

    Authorization: `Bearer ${token}`,
  },
});
