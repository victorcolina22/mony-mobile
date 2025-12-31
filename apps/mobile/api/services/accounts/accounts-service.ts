import { CreateAccount } from '@/shared/interfaces/accounts';
import apiService from '../api-adapter';

export class AccountsService {
  private static readonly baseURL = `${process.env.EXPO_PUBLIC_BASE_URL}`;

  static async create(data: CreateAccount) {
    return await apiService.post(`${this.baseURL}/accounts`, data);
  }
}
