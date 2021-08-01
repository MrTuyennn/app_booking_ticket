import React,{memo} from 'react';
import {ViewStyle, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import BaseHeaderApp, {
  BaseHeaderAppProps,
} from 'components/Header/BaseHeaderApp';
import {ptColors} from 'common/colors';
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
        <ScrollView style={styles.background}>
          {props.showBar && (
            <BaseHeaderApp {...props.appBar} navigation={props.navigation} />
          )}
          {props.children}
        </ScrollView>
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
    backgroundColor: ptColors.appColors,
  },
});
export default memo(BackgroundApp);
