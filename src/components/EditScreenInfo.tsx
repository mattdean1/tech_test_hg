import { Text, View } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className="mx-12 items-center">
        <Text className="font-body text-center text-lg leading-6">{title}</Text>
        <View className="my-2 rounded-md px-1">
          <Text className="font-body">{path}</Text>
        </View>
        <Text className="font-body text-center text-lg leading-6">{description}</Text>
      </View>
    </View>
  );
};
