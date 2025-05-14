import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createUser = async (userData) => {
  const response = await API.post('/signup', userData);
  return response.data;
};

export const saveJournal = async (journalData) => {
  const response = await API.post('/journal', journalData);
  return response.data;
};
