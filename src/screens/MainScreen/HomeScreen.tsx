import {ptColors} from 'common/colors';
import BackgroundApp from 'components/BackgroundApp';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <BackgroundApp showBar={false}>
      <View>
        <Text>Màn hình home</Text>
      </View>
    </BackgroundApp>
  );
};

export default HomeScreen;
