import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { semantic } from '~/ui/colors';

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
};

export const IconButton = ({
  icon,
  onPress,
  size = 24,
  color = semantic.icon.primary,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};
