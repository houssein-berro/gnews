import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsScreen from '../screens/newsScreen/newsScreen';

export type RootStackParamList = {
  News: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen
        name="News"
        component={NewsScreen}
        options={{title: 'Latest News'}}
      />
    </Stack.Navigator>
  );
}
