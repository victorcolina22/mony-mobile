import { createContext, useContext } from 'react';

import { IUser } from '../interfaces/user';

export const AuthContext = createContext<IUser | null>(null);
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
