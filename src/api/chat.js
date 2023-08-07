import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to send a chat message
export const sendMessage = async (message, authToken) => {
  try {
    const response = await axios.post(`${apiUrl}/chat/send`, { message }, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message', error);
    throw error;
  }
};

// Function to receive chat messages
export const receiveMessages = async (authToken) => {
  try {
    const response = await axios.get(`${apiUrl}/chat/receive`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error receiving messages', error);
    throw error;
  }
};

// Function to report a chat message
export const reportMessage = async (messageId, authToken) => {
  try {
    const response = await axios.post(`${apiUrl}/chat/report`, { messageId }, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error reporting message', error);
    throw error;
  }
};