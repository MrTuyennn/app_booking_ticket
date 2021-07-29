import React from 'react';
import {ViewStyle, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import BaseHeaderApp, {
  BaseHeaderAppProps,
} from 'components/Header/BaseHeaderApp';
interface Props {
  showBar?: boolean;
  appBar?: BaseHeaderAppProps;
  style?: ViewStyle;
  children?: React.ReactNode;
  navigation?: any;
}

const BackgroundApp = (props: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.background} forceInset={{top: 'always'}}>
        {props.showBar && (
          <BaseHeaderApp {...props.appBar} navigation={props.navigation} />
        )}
        <ScrollView style={styles.background}>{props.children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

BackgroundApp.defaultProps = {
  showBar: true,
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default BackgroundApp;
