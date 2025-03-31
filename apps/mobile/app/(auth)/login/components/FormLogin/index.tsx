import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

// Components
import { Form } from '@/components/Form';
import { RenderIf } from '@/components/RenderIf';

// Services
import { AuthService } from '@/api/services/auth-service';

// Schema
import { schema } from './schema';

// TODO: Enhance validations and validation messages (figma)
// TODO: Handle errors like email already exists or password is wrong, or with the server

export function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    message: '',
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data: any) => {
    setLoading(true);
    login(data);
  };

  const login = useCallback(async (data: any) => {
    try {
      const response = await AuthService.login(data);
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
    <Form schema={schema} defaultValues={defaultValues}>
      <View className="gap-8 flex-1 justify-center items-center w-full">
        <View className="mb-5 items-center">
          <Text className="text-5xl font-bold w-[400] text-center">
            ¿Listo para seguir?
          </Text>
        </View>

        <View className="w-full gap-8">
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

        <View className="gap-6 absolute bottom-20 w-full">
          <Form.ButtonSubmit
            className="bg-mony-gray rounded-lg py-4 w-full"
            loading={loading}
            onSubmit={handleSubmit}
          >
            Iniciar sesión
          </Form.ButtonSubmit>

          <View className="gap-2">
            <Text className="text-center">¿Olvidaste tu contraseña?</Text>
            <Text className="text-center">
              ¿No tienes cuenta?{' '}
              <Link asChild href="/(auth)/register" replace>
                <Text className="underline">Crear una cuenta</Text>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </Form>
  );
}

export default FormLogin;
