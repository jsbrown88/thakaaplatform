import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const userApi = axios.create({
  baseURL: `${apiUrl}/user`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productApi = axios.create({
  baseURL: `${apiUrl}/product`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const chatApi = axios.create({
  baseURL: `${apiUrl}/chat`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const investorApi = axios.create({
  baseURL: `${apiUrl}/investor`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const doctorApi = axios.create({
  baseURL: `${apiUrl}/doctor`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const supportApi = axios.create({
  baseURL: `${apiUrl}/support`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const trainingApi = axios.create({
  baseURL: `${apiUrl}/training`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const notificationApi = axios.create({
  baseURL: `${apiUrl}/notification`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const forumApi = axios.create({
  baseURL: `${apiUrl}/forum`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const feedbackApi = axios.create({
  baseURL: `${apiUrl}/feedback`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const verificationApi = axios.create({
  baseURL: `${apiUrl}/verification`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const adminApi = axios.create({
  baseURL: `${apiUrl}/admin`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const seoApi = axios.create({
  baseURL: `${apiUrl}/seo`,
  headers: {
    'Content-Type': 'application/json'
  }
});
