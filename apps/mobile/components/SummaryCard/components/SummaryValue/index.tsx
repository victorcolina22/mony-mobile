import { Text, TextProps } from 'react-native';

export function SummaryValue({ children, className }: TextProps) {
  return (
    <Text className={`font-semibold text-3xl ${className}`}>{children}</Text>
  );
}
