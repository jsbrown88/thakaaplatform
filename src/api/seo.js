import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get SEO data
export const getSeoData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/seo`);
    return response.data;
  } catch (error) {
    console.error('Error fetching SEO data', error);
    throw error;
  }
};

// Function to update SEO data
export const updateSeoData = async (seoData) => {
  try {
    const response = await axios.put(`${apiUrl}/seo`, seoData);
    return response.data;
  } catch (error) {
    console.error('Error updating SEO data', error);
    throw error;
  }
};

// Function to get Analytics data
export const getAnalyticsData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/analytics`);
    return response.data;
  } catch (error) {
    console.error('Error fetching analytics data', error);
    throw error;
  }
};

// Function to update Analytics data
export const updateAnalyticsData = async (analyticsData) => {
  try {
    const response = await axios.put(`${apiUrl}/analytics`, analyticsData);
    return response.data;
  } catch (error) {
    console.error('Error updating analytics data', error);
    throw error;
  }
};