import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to submit feedback
export const submitFeedback = async (feedback) => {
  try {
    const response = await axios.post(`${apiUrl}/feedback`, feedback);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get feature notifications
export const getFeatureNotifications = async () => {
  try {
    const response = await axios.get(`${apiUrl}/feedback/notifications`);
    return response.data;
  } catch (error) {
    throw error;
  }
};