export interface IUser {
  id: number;
  access_token: string;
  email: string;
  name: string;
}

export interface User {
  created_at: Date;
  updated_at: Date;
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
}
