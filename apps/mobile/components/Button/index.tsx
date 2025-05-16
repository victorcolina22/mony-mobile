import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

// Types
import { ButtonProps } from './types';

// Utils
import { cn } from '@/shared/utils';

// Constants
import { TEXT_VARIANTS, VARIANTS } from './constants';

export function Button({
  children,
  className,
  loading,
  variant = 'primary',
  ...rest
}: ButtonProps): React.ReactElement {
  return (
    <TouchableOpacity
      className={cn('rounded-lg py-4 w-full', VARIANTS[variant], className)}
      {...rest}
    >
      <Text className={cn('text-center text-xl', TEXT_VARIANTS[variant])}>
        {loading ? (
          <View className="w-full mx-auto py-[2.1]">
            <ActivityIndicator />
          </View>
        ) : (
          children
        )}
      </Text>
    </TouchableOpacity>
  );
}
