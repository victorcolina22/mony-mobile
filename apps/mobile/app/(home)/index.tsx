import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SummaryCard } from '@/components/SummaryCard';

export default function MainScreen() {
  return (
    <SafeAreaView>
      <View className="mt-5 px-10">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="w-10 h-10 rounded-full bg-mony-gray" />
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
            value="600.000"
            percentage={50}
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
