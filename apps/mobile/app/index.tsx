import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { MonyCharacter } from '@/components/MonyCharacter';

import { useAnimations } from '@/hooks/useAnimation';

export default function App() {
  const insets = useSafeAreaInsets();

  const {
    marginAnimatedDefault,
    imageAnimatedOpacityDefault,
    textAnimatedOpacityDefault,
    buttonsAnimatedOpacityDefault,
  } = useAnimations();

  return (
    <>
      <Animated.View
        className="mx-auto"
        style={[imageAnimatedOpacityDefault, { marginTop: insets.top }]}
      >
        <Image
          source={require('../assets/images/mony-logo.png')}
          className="mt-7 object-cover"
        />
      </Animated.View>

      <Animated.View className="flex-1" style={marginAnimatedDefault}>
        <MonyCharacter>
          <Animated.View
            className="gap-5 h-full w-full"
            style={textAnimatedOpacityDefault}
          >
            <Text className="text-white text-center text-5xl font-bold">
              ¡Conoce a Mony!
            </Text>
            <Text className="text-white text-center text-lg max-w-[300] mx-auto">
              El compañero que te ayudará a planificar todos tus gastos...
            </Text>
          </Animated.View>

          <Animated.View
            className="px-10 gap-5 absolute bottom-44 w-full"
            style={buttonsAnimatedOpacityDefault}
          >
            <Link asChild href="/(auth)/register">
              <TouchableOpacity className="bg-mony-gray py-4 rounded-lg">
                <Text className="text-center text-mony-white text-xl">
                  Crear una cuenta
                </Text>
              </TouchableOpacity>
            </Link>
            <Link asChild href="/(auth)/login">
              <TouchableOpacity className="bg-mony-white py-4 rounded-lg">
                <Text className="text-center text-xl">Iniciar sesión</Text>
              </TouchableOpacity>
            </Link>
          </Animated.View>
        </MonyCharacter>
      </Animated.View>
    </>
  );
}
