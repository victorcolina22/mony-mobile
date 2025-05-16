import { Text, TextProps } from 'react-native';
import { cn } from '@/shared/utils';

export function SummarySubtitle({ children, className }: TextProps) {
  return <Text className={cn('text-xs', className)}>{children}</Text>;
}
