import { View } from 'react-native';

type ProgressBarProps = {
  progress: number; // percentage
};

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <View className="h-2 w-full flex-row bg-fill-secondary">
      <View
        className="h-full rounded-r-full bg-fill-brand-emphasis"
        style={{ width: `${progress}%` }}
      />
      <View className="-ms-2 -mt-[1px] h-4 w-4 rounded-full bg-fill-brand-emphasis" />
    </View>
  );
};
