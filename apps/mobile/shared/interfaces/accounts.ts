export interface CreateAccount {
  user_id: number;
  name: string;
  type?: string;
  currency?: string;
  balance?: number;
}
