import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { semantic } from '~/ui/colors';
import { Container } from '~/components/Container';

import { ProgressHeader } from '~/flows/onboarding/components/ProgressHeader';
import { RateInput } from '~/flows/onboarding/components/RateInput';
import { ContinueButton } from '~/flows/onboarding/components/ContinueButton';
import { NewClientRateInput } from '~/flows/onboarding/components/NewClientRateInput';
import { useRateInput } from '~/flows/onboarding/components/useRateInput';

// would be pulled from backend as part of with job:pricing data
const RECOMMENDED_RATE = 20;

export const SetRateScreen: React.FC = () => {
  const { rate, incrementRate, decrementRate } = useRateInput(RECOMMENDED_RATE);

  return (
    <Container>
      <ProgressHeader currentStep={2} totalSteps={7} />
      <View className="flex-col p-20">
        <Text className="font-body text-lg">Set your hourly rate</Text>
        <Text className="text-md mb-40 font-body text-text-primary">
          Choose how much you want to earn on your cleanings. You can change this anytime.
        </Text>
        <RateInput rate={rate} incrementRate={incrementRate} decrementRate={decrementRate} />
        <View className="w-full flex-row justify-center">
          <Text className="font-body text-xs text-text-secondary">
            Recommended rate: ${RECOMMENDED_RATE}/hr
          </Text>
        </View>
        <View className="mb-16 mt-40 w-full flex-row items-center rounded-md bg-fill-secondary p-8">
          <Ionicons name="calendar-clear-outline" size={20} color={semantic.icon.primary} />
          <Text className="ml-8 font-body text-sm text-text-primary">
            We estimate you&apos;ll get <Text className="font-bold">4 jobs</Text> a week
          </Text>
        </View>
        <NewClientRateInput startRate={rate} variant="custom" />
      </View>
      <View className="flex-grow flex-col justify-end">
        <ContinueButton onPress={() => {}} />
      </View>
    </Container>
  );
};
