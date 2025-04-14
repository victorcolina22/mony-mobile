import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { IUser } from '@/shared/interfaces/user';

export const useAuthStore = create(
  combine(
    {
      id: 0,
      name: '',
      email: '',
      access_token: '',
    },
    set => {
      return {
        setUser: (nextUser: IUser) => {
          set({
            ...nextUser,
          });
        },
      };
    }
  )
);
