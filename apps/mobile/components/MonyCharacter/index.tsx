import { View, ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

// Icons
import { EyeCloseIcon } from '../icons/EyeClose';
import { SmileIcon } from '../icons/SmileIcon';

// Hooks
import { useAnimations } from '@/hooks/useAnimation';

// Utils
import { cn } from '@/shared/utils';

interface MonyCharacterProps {
  children: React.ReactNode;
  className?: string;
}

export function MonyCharacter({
  children,
  className,
  ...rest
}: MonyCharacterProps & ViewProps) {
  const { animatedOpacityDefault } = useAnimations();

  return (
    <View className={cn('flex-1 bg-mony-purple relative', className)} {...rest}>
      <View className="absolute -top-40 left-1/2 -translate-x-1/2 bg-mony-purple rounded-full w-[600] h-[600]" />
      <Animated.View
        className="flex-row items-center justify-center gap-16 -mt-10"
        style={animatedOpacityDefault}
      >
        <EyeCloseIcon />
        <EyeCloseIcon />
      </Animated.View>
      <Animated.View
        className="flex-row justify-center mt-4"
        style={animatedOpacityDefault}
      >
        <SmileIcon />
      </Animated.View>
      <View className="mt-32">{children}</View>
    </View>
  );
}
