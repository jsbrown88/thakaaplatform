import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get notifications
export const getNotifications = async (authToken) => {
  try {
    const response = await axios.get(`${apiUrl}/notifications`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to mark a notification as read
export const markNotificationAsRead = async (authToken, notificationId) => {
  try {
    const response = await axios.put(`${apiUrl}/notifications/${notificationId}`, {}, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};