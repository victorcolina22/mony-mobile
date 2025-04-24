import { Tabs } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Overview',
          tabBarActiveTintColor: 'black',
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
