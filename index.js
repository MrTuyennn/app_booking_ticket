/**
 * @format
 */

import {AppRegistry, YellowBox, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Require cycle:',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  'Animated: `useNativeDriver`',
  'Animated.event now requires a second argument for options',
  'Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);
if (Platform.OS === 'android') {
  console.log('StatusBar.setTranslucent(true);');
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}
StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent(appName, () => App);
