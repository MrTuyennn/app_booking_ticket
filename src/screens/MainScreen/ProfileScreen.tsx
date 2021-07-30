import BackgroundApp from 'components/BackgroundApp';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const ProfileScreen = (props: Props) => {
  return (
    <BackgroundApp showBar={false}>
      <Text>Màn hình tài khoản</Text>
    </BackgroundApp>
  );
};

export default ProfileScreen;
