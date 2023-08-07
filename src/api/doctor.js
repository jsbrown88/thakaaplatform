import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get doctor account details
export const getDoctorAccount = async (doctorId) => {
  try {
    const response = await axios.get(`${apiUrl}/doctor/${doctorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to update doctor account details
export const updateDoctorAccount = async (doctorId, updatedData) => {
  try {
    const response = await axios.put(`${apiUrl}/doctor/${doctorId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};