import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { FormRegister } from './components/FormRegister';

export default function ReigsterScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className="flex-1 items-center justify-center px-10">
        <FormRegister />
      </View>
    </TouchableWithoutFeedback>
  );
}
