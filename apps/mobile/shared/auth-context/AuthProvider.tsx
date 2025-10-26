import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'expo-router';

// Context
import { AuthContext } from './auth-context';

// Store
import { useAuthStore } from '@/store/useAuthStore';

// Services
import { axiosInstance } from '@/api/services/api-adapter';
import { AuthService } from '@/api/services/auth/auth-service';

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
    const validateToken = async () => {
      if (!user.access_token) return;

      const validateToken = await AuthService.validateToken(user.access_token);
      if (Object.keys(validateToken).length > 0) {
        router.replace('/(home)');
      } else {
        router.replace('/');
      }
    };
    validateToken();
  }, [user]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
