import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from 'navigation/BottomNavigator';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
