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
export const PAGING_LIMIT = 5;
export const fontSize =
  PixelRatio.get() <= 1.5
    ? 14
    : PixelRatio.get() > 1.5 && PixelRatio.get() < 3
    ? 15
    : 16;
//font scale
const scale = Math.min(WIDTH_SCALE_RATIO, HEIGHT_SCALE_RATIO);
export const FS = (size = fontSize) => Math.ceil(size * scale);

export const fixIcon = (isText = false) => {
  return isText
    ? {marginBottom: IS_IOS ? -3 * WIDTH_SCALE_RATIO : -3 * WIDTH_SCALE_RATIO}
    : {
        marginBottom: IS_IOS ? -3 * WIDTH_SCALE_RATIO : -1 * WIDTH_SCALE_RATIO,
      };
};

export const ptColor = {
  greenSuccess: '#3BB54A',
  blue: '#0A8FD8',
  blue2: '#D7E9F9',
  blue3: '#3b5998',
  bgRed: '#F44336',
  bgGreen: '#E0F8E2',
  textRed: '#F44336',
  textGray: '#4D4D4D',
  yellow: '#F2C94C',
  origin2: '#fc6f03',
  origin: '#FF5100',
  stroke: '#D6DFE3',
  gray6: '#F2F2F2',
  appColor: '#0A8FD8',
  appColor2: '#B8E5FA',
  textColor: '#032E42',
  textPlaceholderColor: '#aaaaaa',
  textSubColor: '#828282',
  borderColor: '#B9C0C260',
  borderColor2: '#aaaaaa',
  black: '#222222',
  white: '#ffffff',
  noWhite: '#f5f5f5',
  transparent: 'transparent',
  lineGradientBlue: ['#ffffff', '#ffffff'],
  lineGradientInstagram: [
    '#8a3ab9',
    '#bc2a8d',
    '#e95950',
    '#fccc63',
    '#fbad50',
    '#cd486b',
    '#4c68d7',
  ],
};
export const ptFont = {
  REGULAR: 'Nunito-Regular',
  MEDIUM: 'Nunito-SemiBold',
  BOLD: 'Nunito-Bold',
  BLACK: 'Nunito-Black',
};
export const ptText = {
  SMALL1: {
    fontSize: FS(fontSize) - 3,
    fontFamily: ptFont.REGULAR,
  },
};

export const styles = {
  textcaptions: {
    ...ptText.SMALL1,
    fontFamily: ptFont.MEDIUM,
    color: ptColor.black,
  },
};
