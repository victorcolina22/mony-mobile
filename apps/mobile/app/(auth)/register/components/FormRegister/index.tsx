import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import * as yup from 'yup';

// Components
import { Form } from '@/components/Form';

// Services
import { AuthService } from '@/api/services/auth-service';

// Constants
import { REGEX_EMAIL, REGEX_REGISTER_PASSWORD } from '@/constants/validation';

// TODO: Enhance validations and validation messages (figma)

const schema = yup.object({
  name: yup
    .string()
    .required('Ups! ¿Olvidaste escribir tu nombre? ✍️')
    .min(2, '¡Muy corto! Usa al menos 2 letras. 🤏'),
  email: yup
    .string()
    .email('Ese correo no parece válido. ¿Lo revisas 👀?')
    .required('Necesitamos tu correo para continuar 👀')
    .matches(REGEX_EMAIL, 'Ese correo no parece válido. ¿Lo revisas 👀?'),
  password: yup
    .string()
    .required('No puedes dejar este campo vacío 🔒')
    .min(8, 'Muy corta 😬. Usa al menos 8 caracteres')
    .matches(
      REGEX_REGISTER_PASSWORD,
      '¡Hazla más fuerte! 💪 Agrega una mayúscula, un número y un símbolo'
    ),
});

export function FormRegister() {
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (data: any) => {
    setLoading(true);
    register(data);
  };

  const register = useCallback(async (data: any) => {
    try {
      const response = await AuthService.register(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
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
          />
          <Form.Input
            name="password"
            placeholder="Contraseña"
            type="password"
            textContentType="oneTimeCode"
          />
        </View>

        <View className="gap-6 absolute bottom-20 w-full">
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
        </View>
      </View>
    </Form>
  );
}

export default FormRegister;
