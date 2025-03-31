import * as yup from 'yup';

import { REGEX_EMAIL } from '@/constants/validation';

export const schema = yup.object({
  email: yup
    .string()
    .email('Ese correo no parece válido. ¿Lo revisas 👀?')
    .required('Necesitamos tu correo para continuar 👀')
    .matches(REGEX_EMAIL, 'Ese correo no parece válido. ¿Lo revisas 👀?'),
  password: yup.string().required('No puedes dejar este campo vacío 🔒'),
});

export default schema;
