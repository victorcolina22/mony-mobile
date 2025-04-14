import axios, { AxiosResponse } from 'axios';
import { HEADERS, TIMEOUT } from '@/constants/config';

const baseURL = '';
export const axiosInstance = axios.create({
  baseURL,
  timeout: TIMEOUT,
  headers: HEADERS,
});

interface RequestOptions<T> {
  params?: any;
  data?: T;
  headers?: any;
}

const apiService = {
  async get<T>(url: string, options?: RequestOptions<T>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get<T>(
        url,
        options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async post<T>(
    url: string,
    data: any,
    options?: RequestOptions<T>
  ): Promise<any> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post<T>(
        url,
        data,
        options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async patch<T>(
    url: string,
    data: any,
    options?: RequestOptions<T>
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.patch<T>(
        url,
        data,
        options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async delete<T>(url: string, options?: RequestOptions<T>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.delete<T>(
        url,
        options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default apiService;
