import { TouchableOpacityProps } from 'react-native';

// Context
import { useFormContext } from '../../context/context';

// Components
import { Button } from '@/components/Button';

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  onSubmit: (data: any) => void;
}

export function ButtonSubmit(props: ButtonProps) {
  const { handleSubmit } = useFormContext();

  return (
    <Button onPress={handleSubmit(props.onSubmit)} {...props}>
      {props.children}
    </Button>
  );
}

export default ButtonSubmit;
