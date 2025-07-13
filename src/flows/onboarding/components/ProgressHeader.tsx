import { View, Text } from 'react-native';

import { IconButton } from '~/components/IconButton';
import { ProgressBar } from '~/components/ProgressBar';

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <View className="flex-col items-center">
      <View className="flex-start w-full flex-row flex-wrap items-center p-8">
        <IconButton icon="arrow-back" onPress={() => {}} />
        <View className="grow flex-row justify-center">
          <Text className="text-md font-body text-text-primary">
            Step {currentStep} of {totalSteps}
          </Text>
        </View>
      </View>
      <ProgressBar progress={progressPercentage} />
    </View>
  );
};
