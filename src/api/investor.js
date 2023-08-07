import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Get investor account details
export const getInvestorAccount = async (investorId) => {
  try {
    const response = await axios.get(`${apiUrl}/investor/${investorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update investor account details
export const updateInvestorAccount = async (investorId, updatedData) => {
  try {
    const response = await axios.put(`${apiUrl}/investor/${investorId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};