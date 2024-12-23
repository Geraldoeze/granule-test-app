import React from 'react';
// import PrimaryView from '../../components/display/PrimaryView';
import {View, Image, Text} from 'react-native';
import PrimaryView from '../../components/display/PrimaryView';
import {fontFamily} from '../../constants/fonts';
import {useTheme} from '@react-native-material/core';

const SplashIntroScreen = () => {
  const theme = useTheme();

  return (
    <PrimaryView
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 30, fontFamily: "Outfit-Black"}}>Flexibility with ease</Text>
    </PrimaryView>
  );
};

export default SplashIntroScreen;
