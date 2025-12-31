import { UsersService } from '@/api/services/users/users-service';
import { useAuthStore } from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import { View, Text } from 'react-native';

export function Avatar() {
  const userId = useAuthStore(state => state.id);

  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: () => UsersService.findOne(userId),
    retry: 2,
    enabled: !!userId,
  });

  const firstLetterName = userData?.name?.split(' ')?.[0]?.split('')?.[0];

  return (
    <View className="flex items-center justify-center w-10 h-10 rounded-full bg-mony-gray">
      <Text className="text-white">{firstLetterName ?? ''}</Text>
    </View>
  );
}
