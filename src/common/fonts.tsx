import {Dimensions, PixelRatio, Platform} from 'react-native';

const baseWidth = 398;
const baseHeight = 736;
export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('window').height;
export const WIDTH_SCALE_RATIO = WIDTH / baseWidth;
export const HEIGHT_SCALE_RATIO = HEIGHT / baseHeight;

export const fontSize =
  PixelRatio.get() <= 1.5
    ? 14
    : PixelRatio.get() > 1.5 && PixelRatio.get() < 3
    ? 15
    : 16;
//font scale
const scale = Math.min(WIDTH_SCALE_RATIO, HEIGHT_SCALE_RATIO);
export const FS = (size = fontSize) => Math.ceil(size * scale);

export const size = {
  tiny: 8,
  small: 12,
  normal: 14,
  large: 18,
  largeX: 20,
  h1: 40,
  h2: 34,
  h3: 28,
  h4: 22,
  h5: 16,
  h6: 10,
  h7: 4,
};

export const fontFamily = {
  GilroyMedium: 'Gilroy-Medium',
  GilroyLight: 'Gilroy-Light',
  GilroyExtraBold: 'Gilroy-ExtraBold',
  GilroySemiBold: 'Gilroy-SemiBold',
  Quicksand: 'Quicksand',
  QuicksandBold: 'Quicksand-Bold',
  QuicksandMedium: 'Quicksand-Medium',
  QuicksandSemiBold: 'Quicksand-SemiBold',
  CabinBold: 'Cabin-Bold',
  CabinRegular: 'Cabin-Regular',
  CabinSemiBold: 'Cabin-SemiBold',
  Cabin: 'Cabin',
  ComfortaaBold: 'Comfortaa-Bold',
  ComfortaaMedium: 'Comfortaa-Medium',
  Comfortaa: 'Comfortaa',
  FiraSansExtraLight: 'FiraSans-ExtraLight',
  FiraSansMedium: 'FiraSansMedium',
  RobotoBold: 'Roboto-Bold',
  RobotoLight: 'Roboto-Light',
  RobotoMedium: 'Roboto-Medium',
  SourceSansProLight: 'SourceSansPro-Light',
  SourceSansProRegular: 'SourceSansProRegular',
  SourceSansProSemiBold: 'SourceSansProSemiBold',
  REGULAR: 'Nunito-Regular',
  MEDIUM: 'Nunito-SemiBold',
  BOLD: 'Nunito-Bold',
  BLACK: 'Nunito-Black',
};

export const ptText = {
  SMALL1: {
    fontSize: FS(fontSize) - 3,
    fontFamily: fontFamily.REGULAR,
  },
};

export const ptFonts = {
  textcaptions: {
    ...ptText.SMALL1,
    fontFamily: fontFamily.MEDIUM,
  },
};
