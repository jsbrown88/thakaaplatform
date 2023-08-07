import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Function to register a new user
export const register = async (user) => {
  try {
    const response = await axios.post(`${apiUrl}/users/register`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to login a user
export const login = async (user) => {
  try {
    const response = await axios.post(`${apiUrl}/users/login`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to authenticate a user
export const authenticateUser = async (authToken) => {
  try {
    const response = await axios.get(`${apiUrl}/users/authenticate`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to logout a user
export const logout = async (authToken) => {
  try {
    const response = await axios.post(
      `${apiUrl}/users/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get user profile
export const getUserProfile = async (authToken) => {
  try {
    const response = await axios.get(`${apiUrl}/users/profile`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update user profile
export const updateUserProfile = async (authToken, userProfile) => {
  try {
    const response = await axios.put(
      `${apiUrl}/users/profile`,
      userProfile,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};