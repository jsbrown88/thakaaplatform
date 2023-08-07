import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';

// Function to get product list
export const getProductList = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get product details
export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to search product
export const searchProduct = async (searchTerm) => {
  try {
    const response = await axios.get(`${apiUrl}/products/search?term=${searchTerm}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to filter product
export const filterProduct = async (filterParams) => {
  try {
    const response = await axios.get(`${apiUrl}/products/filter`, { params: filterParams });
    return response.data;
  } catch (error) {
    throw error;
  }
};