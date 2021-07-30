import BackgroundApp from 'components/BackgroundApp';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const BookingScreen = (props: Props) => {
  return (
    <BackgroundApp showBar={false}>
      <Text>Màn hình booking</Text>
    </BackgroundApp>
  );
};

export default BookingScreen;
