import {IMAGE_PATHS} from 'assets/images';
import {ptColors} from 'common/colors';
import {fontFamily, FS, HEIGHT, WIDTH} from 'common/fonts';
import CusInputText from 'components/CusInputText';
import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';

interface Props {}

const LoginScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let ref_input2 = React.useRef(null);
  let ref_input1 = React.useRef(null);
  console.log('email', email);
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.imageContainer}
      source={IMAGE_PATHS.imageBanner}>
      <View style={styles.overPLay}>
        <View style={styles.BottomView}>
          <Text style={styles.cusText}>ĐĂNG NHẬP</Text>
          <CusInputText
            inputRef={(ref: any) => (ref_input1.current = ref)}
            // @ts-ignore
            onSubmitEditing={() => ref_input2.current.focus()}
            onChangeText={(text: string) => setEmail(text)}
            value={email}
            lable="Nhập email"
            autoFocus={false}
            blurOnSubmit={false}
          />
          <CusInputText
            inputRef={(ref: any) => (ref_input2.current = ref)}
            onChangeText={(text: string) => setPassword(text)}
            value={password}
            lable="Nhập mật khẩu"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  overPLay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: ptColors.lightGreyColor,
  },
  BottomView: {
    height: HEIGHT / 2.2,
    width: WIDTH,
    backgroundColor: ptColors.grey,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cusText: {
    color: ptColors.lRed,
    fontFamily: fontFamily.CabinBold,
    textAlign: 'center',
    marginVertical: 20,
    fontSize: FS(18),
  },
});
export default LoginScreen;
