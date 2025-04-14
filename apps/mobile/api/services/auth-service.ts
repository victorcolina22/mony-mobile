import apiService from './api-service';

import { IUser } from '@/shared/interfaces/user';

export class AuthService {
  private static readonly baseURL = `${process.env.EXPO_PUBLIC_BASE_URL}/auth`;

  static async login(loginRequest: { email: string; password: string }) {
    return await apiService.post<IUser>(`${this.baseURL}/login`, loginRequest);
  }

  static async register(registerRequest: {
    name: string;
    email: string;
    password: string;
  }) {
    return await apiService.post(`${this.baseURL}/register`, registerRequest);
  }
}
