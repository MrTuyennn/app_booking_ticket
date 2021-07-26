import {IMAGE_PATHS} from 'assets/images';
import {ptColors} from 'common/colors';
import {fontFamily, FS, HEIGHT, WIDTH} from 'common/fonts';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import CusButton from 'components/CusButton';
import CusInputText from 'components/CusInputText';
import ListSocail from 'components/ListSocail';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

interface Props {}

const LoginScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let ref_input2 = React.useRef(null);
  let ref_input1 = React.useRef(null);
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
            isPw
          />
          <View
            style={{
              alignSelf: 'flex-end',
              marginVertical: 10 * HEIGHT_SCALE_RATIO,
            }}>
            <Text style={{color: ptColors.white}}>Quên mật khẩu?</Text>
          </View>

          <CusButton title="Đăng nhập" />
          <Text style={styles.textOr}>Hoặc</Text>

          <ListSocail />
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
    width: WIDTH,
    backgroundColor: ptColors.oBlack,
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  cusText: {
    color: ptColors.lRed,
    fontFamily: fontFamily.CabinBold,
    textAlign: 'center',
    fontSize: FS(18),
  },
  textOr: {
    textAlign: 'center',
    color: ptColors.white,
    marginVertical: 10 * WIDTH_SCALE_RATIO,
    fontSize: FS(16),
  },
});
export default LoginScreen;
