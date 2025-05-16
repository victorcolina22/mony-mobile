import { Controller } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { useFormContext } from '../../context/context';
import { useState } from 'react';
import { PasswordEyeIcon } from '@/components/icons/PasswordEyeIcon';
import { PasswordEyeCloseIcon } from '@/components/icons/PasswordEyeCloseIcon';

interface InputProps extends TextInputProps {}
type Type = 'text' | 'password';

export function Input(props: InputProps & { name: string; type?: Type }) {
  const { name, type, ...rest } = props;
  const { control, errors } = useFormContext();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setPasswordVisible(prev => !prev);
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <View className="relative">
            <TextInput
              className={`bg-mony-light-gray p-5 rounded-lg ${
                errors[name]?.message ? 'border border-mony-red' : ''
              }`}
              placeholderTextColor="black"
              value={value}
              secureTextEntry={type === 'password' && !passwordVisible}
              onChangeText={onChange}
              {...rest}
            />

            {type === 'password' ? (
              <View className="absolute right-6 top-1/2 -translate-y-1/2">
                {passwordVisible ? (
                  <PasswordEyeIcon onPress={handlePasswordVisible} />
                ) : (
                  <PasswordEyeCloseIcon onPress={handlePasswordVisible} />
                )}
              </View>
            ) : null}
          </View>
        )}
      />
      {errors[name]?.message ? (
        <Text className="text-mony-red -mt-5 ml-2">
          {errors[name]?.message}
        </Text>
      ) : null}
    </>
  );
}

export default Input;
