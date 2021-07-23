import React from 'react';
import { StyleSheet, View } from 'react-native';
interface Props {}

const SplashScreen = (props: Props) => {
  
  return (
    <View style={styles.container}>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default SplashScreen;
