import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get all forum threads
export const getForumThreads = async () => {
  try {
    const response = await axios.get(`${apiUrl}/forum`);
    return response.data;
  } catch (error) {
    console.error('Error fetching forum threads:', error);
    throw error;
  }
};

// Function to create a new forum thread
export const createForumThread = async (threadData) => {
  try {
    const response = await axios.post(`${apiUrl}/forum`, threadData);
    return response.data;
  } catch (error) {
    console.error('Error creating forum thread:', error);
    throw error;
  }
};

// Function to reply to a forum thread
export const replyToThread = async (threadId, replyData) => {
  try {
    const response = await axios.post(`${apiUrl}/forum/${threadId}/reply`, replyData);
    return response.data;
  } catch (error) {
    console.error('Error replying to forum thread:', error);
    throw error;
  }
};