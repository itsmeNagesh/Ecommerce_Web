import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProduct = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('API call error in getproduct:', error);
    throw error;
  }
};

export const createProduct = async (url, productData) => {
  try {
    const response = await apiClient.post(url, productData);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const updateProduct = async (url, productData) => {
  try {
    const response = await apiClient.put(url, productData);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export default apiClient;
