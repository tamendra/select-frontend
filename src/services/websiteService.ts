import { Website, Category } from '../types';
import axios from 'axios';
import { API_BASE_URL, ApiEndpoints } from './constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL, // Replace with actual API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchWebsites = async (): Promise<Website[]> => {
  const response = await apiClient.get<Website[]>(ApiEndpoints.SITES);
  return response.data.splice(0,15);
};

export const fetchWebsitesByCategory = async (categoryid: number): Promise<Website[]> => {
  const response = await apiClient.get(ApiEndpoints.SITES);
  return response.data.splice(0,10);
};

export const fetchAllCategories = async () => {
  const response = await apiClient.get<Category[]>(ApiEndpoints.CATEGORY);
  return response.data.splice(0,10);
};

export const fetchLatestCategories = async () => {
  const response = await apiClient.get<Category[]>(ApiEndpoints.CATEGORY);
  return response.data.splice(0,5);
};

export const fetchFeaturedWebsites = async () => {
  const response = await apiClient.get(ApiEndpoints.SITES);
  return response.data.splice(0,5);
};
