import React from 'react';
// import PrimaryView from '../../components/display/PrimaryView';
import {Text, View} from 'react-native';
import PrimaryView from '../../components/display/PrimaryView';

// import LoaderIcon from '../../components/display/LoaderIcon';

const SplashIntroScreen = () => {
  return (
    <PrimaryView
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>Splash</Text>
        </View>
        {/* <LoaderIcon /> */}
      </View>
    </PrimaryView>
  );
};

export default SplashIntroScreen;
