import { View, Text } from 'react-native';

import { semantic } from '~/ui/colors';
import { IconButton } from '~/components/IconButton';
import { classNames } from '~/services/ui/classnames';

type RateInputProps = {
  rate: number;
  incrementRate: () => void;
  decrementRate: () => void;
  size?: 'small' | 'large';
};

export const RateInput = ({
  rate,
  incrementRate,
  decrementRate,
  size = 'large',
}: RateInputProps) => {
  return (
    <View className="flex-col items-center">
      <View className="flex-row items-center">
        <IconButton
          icon="remove-circle-outline"
          onPress={decrementRate}
          color={semantic.icon.secondary}
        />
        <Text
          className={classNames(
            'mx-8 font-body text-4xl font-bold',
            size === 'large' ? 'text-4xl' : 'text-sm'
          )}>
          ${rate}
          {size === 'large' ? '' : '/hr'}
        </Text>
        <IconButton
          icon="add-circle-outline"
          onPress={incrementRate}
          color={semantic.icon.secondary}
        />
      </View>
    </View>
  );
};
