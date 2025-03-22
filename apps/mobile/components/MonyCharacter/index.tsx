import { View, ViewProps } from 'react-native';

import { EyeCloseIcon } from '../icons/EyeClose';
import { SmileIcon } from '../icons/SmileIcon';

interface MonyCharacterProps {
  children: React.ReactNode;
  className?: string;
}
export function MonyCharacter({
  children,
  className,
  ...rest
}: MonyCharacterProps & ViewProps) {
  return (
    <View className={`flex-1 bg-mony-purple relative ${className}`} {...rest}>
      <View className="absolute -top-40 left-1/2 -translate-x-1/2 bg-mony-purple rounded-full w-[600] h-[600]" />
      <View className="flex-row items-center justify-center gap-16 -mt-10">
        <EyeCloseIcon />
        <EyeCloseIcon />
      </View>
      <View className="flex-row justify-center mt-4">
        <SmileIcon />
      </View>
      <View className="mt-32">{children}</View>
    </View>
  );
}
