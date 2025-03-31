import * as yup from 'yup';

import { REGEX_EMAIL, REGEX_REGISTER_PASSWORD } from '@/constants/validation';

export const schema = yup.object({
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

export default schema;
