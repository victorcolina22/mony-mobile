import 'react-native-reanimated';
import '../global.css';

import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import { AuthProvider } from '@/shared/auth-context/AuthProvider';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// TanStack Query Client
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(home)"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="(firstTimeJourney)"
            options={{ headerShown: false }}
          />
        </Stack>

        <StatusBar style="auto" />
      </QueryClientProvider>
    </AuthProvider>
  );
}
