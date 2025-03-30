import apiService from './api-service';

export class AuthService {
  private static readonly baseURL = 'http://192.168.100.114:3000/auth';

  static async login(loginRequest: { email: string; password: string }) {
    return await apiService.post(`${this.baseURL}/login`, loginRequest);
  }

  static async register(registerRequest: {
    name: string;
    email: string;
    password: string;
  }) {
    return await apiService.post(`${this.baseURL}/register`, registerRequest);
  }
}
