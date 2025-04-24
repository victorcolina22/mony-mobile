import { Text, TextProps } from 'react-native';

export function SummarySubtitle({ children, className }: TextProps) {
  return <Text className={`text-xs ${className}`}>{children}</Text>;
}
