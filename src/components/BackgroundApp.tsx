import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
interface Props {
  children?: React.ReactNode;
}

const BackgroundApp = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} forceInset={{top: 'always'}}>
        <ScrollView style={styles.background}>{props.children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default BackgroundApp;
