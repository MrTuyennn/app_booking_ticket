import BackgroundApp from 'components/BackgroundApp';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const ListMovieScreen = (props: Props) => {
  return (
    <BackgroundApp showBar={false}>
      <Text>List movie</Text>
    </BackgroundApp>
  );
};

export default ListMovieScreen;
