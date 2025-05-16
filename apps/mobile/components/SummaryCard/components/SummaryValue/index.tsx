import { Text, TextProps } from 'react-native';
import { cn } from '@/shared/utils';

export function SummaryValue({ children, className }: TextProps) {
  return (
    <Text className={cn('font-semibold text-3xl', className)}>{children}</Text>
  );
}
