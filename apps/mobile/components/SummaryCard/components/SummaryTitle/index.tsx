import { Text, TextProps } from 'react-native';

export function SummaryTitle({ children, className }: TextProps) {
  return <Text className={`font-semibold ${className}`}>{children}</Text>;
}
