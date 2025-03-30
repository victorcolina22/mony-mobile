import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { useFormContext } from '../context/context';

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  onSubmit: (data: any) => void;
}

export function ButtonSubmit(props: ButtonProps) {
  const { handleSubmit } = useFormContext();

  return (
    <TouchableOpacity onPress={handleSubmit(props.onSubmit)} {...props}>
      <Text className="text-mony-white text-center text-xl">
        {props.loading ? (
          <View className="w-full mx-auto py-[2.1]">
            <ActivityIndicator />
          </View>
        ) : (
          props.children
        )}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonSubmit;
