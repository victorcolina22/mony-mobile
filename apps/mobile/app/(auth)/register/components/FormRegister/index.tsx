import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Link } from 'expo-router';

// Components
import { Form } from '@/components/Form';
import { RenderIf } from '@/components/RenderIf';

// Services
import { AuthService } from '@/api/services/auth-service';

// Schema
import { defaultValues, schema } from './schema';

export function FormRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    message: '',
  });

  const handleSubmit = (data: any) => {
    setLoading(true);
    register(data);
  };

  const register = useCallback(async (data: any) => {
    try {
      const response = await AuthService.register(data);
      console.log(response);
    } catch (error: any) {
      setError({
        show: true,
        message: error.response.data.message,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleOnChange = () => {
    if (error.message === '') return;
    setError({
      show: false,
      message: '',
    });
  };

  return (
    <View className="flex-1">
      <KeyboardAwareScrollView
        contentContainerClassName="flex-1"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Form schema={schema} defaultValues={defaultValues}>
          <View className="gap-8 flex-1 justify-center items-center w-full">
            <View className="bg-mony-light-gray w-48 h-48 rounded-full -mt-36 mb-5" />

            <View className="mb-5 items-center">
              <Text className="text-5xl font-bold w-[400] text-center">
                ¡Es tu turno de presentarte!
              </Text>
            </View>

            <View className="w-full gap-8">
              <Form.Input
                name="name"
                placeholder="Nombre"
                spellCheck={false}
                textContentType="oneTimeCode"
              />
              <Form.Input
                name="email"
                placeholder="Correo electrónico"
                spellCheck={false}
                textContentType="oneTimeCode"
                onPress={handleOnChange}
              />
              <Form.Input
                name="password"
                placeholder="Contraseña"
                type="password"
                textContentType="oneTimeCode"
                onPress={handleOnChange}
              />
            </View>

            <RenderIf isTrue={error.show}>
              <Text className="text-mony-red">{error.message}</Text>
            </RenderIf>

            <Form.Footer>
              <Form.ButtonSubmit
                className="bg-mony-gray rounded-lg py-4 w-full"
                loading={loading}
                onSubmit={handleSubmit}
              >
                Crear una cuenta
              </Form.ButtonSubmit>

              <View className="gap-2">
                <Text className="text-center">
                  ¿Ya tienes una cuenta?{' '}
                  <Link asChild href="/(auth)/login" replace>
                    <Text className="underline">Inicia sesión</Text>
                  </Link>
                </Text>
              </View>
            </Form.Footer>
          </View>
        </Form>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default FormRegister;
