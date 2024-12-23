import React from 'react';
import SplashScreen from '../screens/SplashIntroScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
