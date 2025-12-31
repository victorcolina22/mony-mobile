import { User } from '@/shared/interfaces/user';
import apiService from '../api-adapter';

export class UsersService {
  private static readonly baseURL = `${process.env.EXPO_PUBLIC_BASE_URL}`;

  static async findAll() {
    return await apiService.get<User[]>(`${this.baseURL}/users`);
  }

  static async findOne(id: number) {
    return await apiService.get<User>(`${this.baseURL}/users/${id}`);
  }
}
