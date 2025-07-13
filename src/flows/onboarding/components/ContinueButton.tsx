import { TouchableOpacity, View, Text } from 'react-native';

type ContinueButtonProps = {
  onPress: () => void;
};

export const ContinueButton = ({ onPress }: ContinueButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="m-16">
      <View className="flex-row items-center justify-center rounded-full bg-fill-brand-emphasis p-12">
        <Text className="font-body">Continue</Text>
      </View>
    </TouchableOpacity>
  );
};
