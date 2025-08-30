import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'expo-router';

// Context
import { AuthContext } from './auth-context';

// Store
import { useAuthStore } from '@/store/useAuthStore';

// Services
import { axiosInstance } from '@/api/services/api-adapter';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAuthStore(state => state);

  useLayoutEffect(() => {
    if (!user.access_token) return;
    axiosInstance.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${user.access_token}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }, []);

  useEffect(() => {
    if (user.access_token) return;
    router.replace('/');
  }, [user]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
