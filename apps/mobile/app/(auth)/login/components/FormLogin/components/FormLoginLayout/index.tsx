import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

// Components
import { PasswordEyeCloseIcon } from '@/components/icons/PasswordEyeCloseIcon';
import { PasswordEyeIcon } from '@/components/icons/PasswordEyeIcon';

// TODO: Add validations (option: yup)

interface FormLoginData {
  email: string;
  password: string;
}

export function FormLoginComponent() {
  const { control, handleSubmit } = useForm<FormLoginData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleOnSubmit = (data: FormLoginData) => {
    console.log(data);
  };

  return (
    <>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-mony-light-gray w-full p-5 rounded-lg"
            placeholder="Correo electrónico"
            placeholderTextColor="black"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <View className="relative">
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="bg-mony-light-gray w-full p-5 rounded-lg"
              placeholder="Contraseña"
              placeholderTextColor="black"
              secureTextEntry={!passwordVisible}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <View className="absolute right-6 top-1/2 -translate-y-1/2">
          {passwordVisible ? (
            <PasswordEyeIcon onPress={handlePasswordVisible} />
          ) : (
            <PasswordEyeCloseIcon onPress={handlePasswordVisible} />
          )}
        </View>
      </View>

      <TouchableOpacity
        className="bg-mony-gray rounded-lg py-4 w-full"
        onPress={handleSubmit(handleOnSubmit)}
      >
        <Text className="text-mony-white text-center text-xl">
          Iniciar sesión
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default FormLoginComponent;
