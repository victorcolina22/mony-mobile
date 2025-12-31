import { Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';

export default function MainScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 items-center justify-center px-10">
      <Text className="text-[48px] text-center font-bold">
        ¡Armemos tu presupuesto!
      </Text>

      <Text className="text-base text-mony-gray mt-7">
         Hagamos un plan para que tus finanzas sean predecibles (y no un
        misterio cada fin de mes). Es fácil, te guiaremos paso a paso.
      </Text>

      <View
        className="gap-5 items-center"
        style={{
          position: 'absolute',
          width: '100%',
          bottom: insets.bottom + 30,
        }}
      >
        <Button>!Vamos!</Button>
        <Link asChild href="/(home)" replace>
          <TouchableOpacity>
            <Text>Omitir configuración</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
