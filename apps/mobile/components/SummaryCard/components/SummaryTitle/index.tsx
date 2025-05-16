import { Text, TextProps } from 'react-native';
import { cn } from '@/shared/utils';

export function SummaryTitle({ children, className }: TextProps) {
  return <Text className={cn('font-semibold', className)}>{children}</Text>;
}
