import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to create a support ticket
export const createSupportTicket = async (supportTicket) => {
  try {
    const response = await axios.post(`${apiUrl}/support`, supportTicket);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get a support ticket
export const getSupportTicket = async (ticketId) => {
  try {
    const response = await axios.get(`${apiUrl}/support/${ticketId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};