/**
 * @format
 */

import { ptColors } from 'common/colors';
import {AppRegistry, YellowBox, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Require cycle:',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'LinearGradient colors and locations props should be arrays of the same length'
]);
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(ptColors.appColors);
  StatusBar.setTranslucent(true);
}
StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent(appName, () => App);
