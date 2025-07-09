import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-display text-xl font-semibold">{title}</Text>
      <View className="bg-gray-200 my-7 h-[1px] w-4/5" />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
