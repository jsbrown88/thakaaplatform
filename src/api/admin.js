import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get site data
export const getSiteData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/admin/siteData`);
    return response.data;
  } catch (error) {
    console.error('Error fetching site data', error);
    throw error;
  }
};

// Function to update site data
export const updateSiteData = async (siteData) => {
  try {
    const response = await axios.put(`${apiUrl}/admin/siteData`, siteData);
    return response.data;
  } catch (error) {
    console.error('Error updating site data', error);
    throw error;
  }
};

// Function to login admin
export const loginAdmin = async (adminCredentials) => {
  try {
    const response = await axios.post(`${apiUrl}/admin/login`, adminCredentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in admin', error);
    throw error;
  }
};

// Function to logout admin
export const logoutAdmin = async () => {
  try {
    const response = await axios.post(`${apiUrl}/admin/logout`);
    return response.data;
  } catch (error) {
    console.error('Error logging out admin', error);
    throw error;
  }
};