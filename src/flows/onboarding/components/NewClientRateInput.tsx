import { useState } from 'react';
import { View, Text, Switch } from 'react-native';

import { semantic } from '~/ui/colors';
import { useRateInput } from '~/flows/onboarding/components/useRateInput';
import { RATE_INCREMENT } from '~/services/onboarding';
import { RateInput } from '~/flows/onboarding/components/RateInput';
type NewClientRateInputProps = {
  startRate: number;
  variant?: 'default' | 'custom';
};

export const NewClientRateInput = ({ startRate, variant = 'default' }: NewClientRateInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const newClientRate = startRate - RATE_INCREMENT;

  const { rate, incrementRate, decrementRate } = useRateInput(newClientRate);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <View className="w-full flex-col overflow-hidden rounded-md border-[1px] border-solid border-border-secondary">
      <View className="m-8 flex flex-row">
        <View className="flex-1 flex-col">
          <Text className="font-body text-sm font-bold text-text-primary">New client rate</Text>
          <Text className="text-wrap font-body text-xs text-text-primary">
            {variant === 'custom'
              ? 'Choose a custom hourly rate for new clients.'
              : 'A $5/hr marketing fee will apply to your rate for new clients.'}
          </Text>
        </View>
        <View className="">
          {variant === 'custom' ? (
            <View>
              <Switch
                value={isOpen}
                onValueChange={toggleOpen}
                trackColor={{ false: semantic.fill.secondary, true: semantic.fill.emphasis }}
              />
            </View>
          ) : (
            <Text className="font-body text-sm font-bold text-text-primary">
              ${newClientRate}/hr
            </Text>
          )}
        </View>
      </View>
      {isOpen && (
        <View className="flex-row justify-between border-t-[1px] border-solid border-border-secondary p-8">
          <Text className="font-body text-sm font-bold text-text-primary">New clients</Text>
          <RateInput
            size="small"
            rate={rate}
            incrementRate={incrementRate}
            decrementRate={decrementRate}
          />
        </View>
      )}
    </View>
  );
};
