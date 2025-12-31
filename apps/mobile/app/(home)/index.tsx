import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SummaryCard } from '@/components/SummaryCard';
import { Avatar } from '@/components/Avatar';

export default function MainScreen() {
  return (
    <SafeAreaView>
      <View className="mt-5 px-10">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <Avatar />
            <Text className="text-2xl font-semibold">Mi hogar</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="settings-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="mt-10">
          <SummaryCard
            title="Gastos extras"
            subtitle="Restante para gastar"
            value="0"
            percentage={0}
          />
        </View>

        <View className="mt-5">
          <SummaryCard
            title="Gastos fijos"
            subtitle="Ingresados hasta hoy"
            value="0"
            percentage={0}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
