import { View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

// Context
import { useSummaryCardContext } from '../SummaryCard/context/context';

export function ProgressBar(): React.ReactElement {
  const { percentage } = useSummaryCardContext();

  const width = useSharedValue('0%');
  width.value = withSpring(`${percentage}`, {
    damping: 50, // Controls how quickly the animation settles
  });

  return (
    <View className="relative">
      <View className="h-2 w-full bg-mony-light-gray-2 rounded-lg absolute" />
      <Animated.View
        className="h-2 bg-mony-gray rounded-lg absolute"
        style={{ width: width as unknown as Animated.SharedValue<number> }}
      />
    </View>
  );
}
