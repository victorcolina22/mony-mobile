import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { FormLogin } from './components/FormLogin';

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 items-center justify-center">
        <FormLogin />
      </View>
    </TouchableWithoutFeedback>
  );
}
