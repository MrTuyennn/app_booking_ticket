import {Dimensions, PixelRatio, Platform} from 'react-native';
export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
// Use iPhone6 as base size which is 375 x 667
const baseWidth = 398;
const baseHeight = 736;
///screen scale
export const WIDTH_SCALE_RATIO = WIDTH / baseWidth;
export const HEIGHT_SCALE_RATIO = HEIGHT / baseHeight;
