import { IUser } from '@/shared/interfaces/user';
import apiService from '../api-adapter';

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
