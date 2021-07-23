module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets', // optional
          '@fonts': './src/assets/fonts',
          '@images': './src/assets/images',
          '@icons': './src/assets/icons',
          '@components': './src/components', // optional
          '@constants': './src/constants', // optional
          '@screens': './src/screens', // optional
          '@states': './src/states', // optional
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@common':'./src/common'
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
