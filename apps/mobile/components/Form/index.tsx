import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Context
import { FormContext } from './context/context';

// Components
import { ButtonSubmit } from './ButtonSubmit';
import { Footer } from './Footer';
import { Input } from './Input';

interface FormContextProps {
  children: React.ReactNode;
  schema: any;
  defaultValues: any;
}

export function FormComponent({
  children,
  schema,
  defaultValues,
}: FormContextProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <FormContext.Provider value={{ control, errors, hasErrors, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
}
FormComponent.displayName = 'Form';

export const Form = Object.assign(FormComponent, {
  Input,
  ButtonSubmit,
  Footer,
});

export default Form;
