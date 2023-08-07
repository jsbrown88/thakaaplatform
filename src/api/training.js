import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get training information
export const getTrainingInfo = async () => {
  try {
    const response = await axios.get(`${apiUrl}/training`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get license information
export const getLicenseInfo = async () => {
  try {
    const response = await axios.get(`${apiUrl}/license`);
    return response.data;
  } catch (error) {
    throw error;
  }
};