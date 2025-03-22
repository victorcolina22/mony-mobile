import { Text, View } from 'react-native';

import { FormLoginComponent } from './components/FormLoginLayout';

export function FormLogin() {
  return (
    <View className="w-full px-10 gap-8">
      <View className="mb-10 items-center">
        <Text className="text-5xl font-bold">¡Hola de nuevo!</Text>
        <Text className="mt-3 text-center px-10">
          Accede a tu cuenta para seguir organizando tu dinero.
        </Text>
      </View>

      <FormLoginComponent />

      <View className="gap-4">
        <Text className="text-center">¿Olvidaste tu contraseña?</Text>
        <Text className="text-center">
          ¿No tienes cuenta? <Text className="underline">Crear una cuenta</Text>
        </Text>
      </View>
    </View>
  );
}

export default FormLogin;
