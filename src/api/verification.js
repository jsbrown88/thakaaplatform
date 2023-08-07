import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to verify user
export const verifyUser = async (userId, verificationData) => {
  try {
    const response = await axios.post(`${apiUrl}/verification/verify/${userId}`, verificationData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get verification status
export const getVerificationStatus = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/verification/status/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};