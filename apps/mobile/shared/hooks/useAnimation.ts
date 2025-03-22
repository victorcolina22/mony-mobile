import { useEffect } from 'react';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export const useAnimations = () => {
  const marginAnimated = useSharedValue(900);
  const imageAnimatedOpacity = useSharedValue(0);
  const textAnimatedOpacity = useSharedValue(0);
  const buttonsAnimatedOpacity = useSharedValue(0);

  const marginAnimatedDefault = useAnimatedStyle(() => ({
    marginTop: marginAnimated.value,
  }));
  const imageAnimatedOpacityDefault = useAnimatedStyle(() => ({
    opacity: imageAnimatedOpacity.value,
  }));
  const textAnimatedOpacityDefault = useAnimatedStyle(() => ({
    opacity: textAnimatedOpacity.value,
  }));
  const buttonsAnimatedOpacityDefault = useAnimatedStyle(() => ({
    opacity: buttonsAnimatedOpacity.value,
  }));

  useEffect(() => {
    marginAnimated.value = withTiming(192, {
      duration: 1200,
      easing: Easing.inOut(Easing.ease),
    });

    imageAnimatedOpacity.value = withDelay(
      1200,
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );

    textAnimatedOpacity.value = withDelay(
      1500,
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );

    buttonsAnimatedOpacity.value = withDelay(
      1800,
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, []);

  return {
    marginAnimatedDefault,
    imageAnimatedOpacityDefault,
    textAnimatedOpacityDefault,
    buttonsAnimatedOpacityDefault,
  };
};
