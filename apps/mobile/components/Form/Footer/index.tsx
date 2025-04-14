import { View, ViewProps } from 'react-native';

interface FooterProps extends ViewProps {}

export function Footer({ children, className }: FooterProps) {
  return (
    <View className={`gap-6 absolute bottom-14 w-full ${className}`}>
      {children}
    </View>
  );
}
