/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

import SplashIntroScreen from './src/screens/SplashIntroScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? z,
  // };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <View>
          <Text>React</Text>
        </View> */}
        <Stack.Navigator>
        {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          /> */}
        <Stack.Screen
            name="SplashIntroScreen"
            component={SplashIntroScreen}
            options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
