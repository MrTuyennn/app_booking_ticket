import { IMAGE_PATHS } from 'assets/images';
import { ptColors } from 'common/colors';
import { fontFamily, FS } from 'common/fonts';
import { HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO } from 'common/styles';
import BackgroundApp from 'components/BackgroundApp';
import CusButton from 'components/CusButton';
import CusInputText from 'components/CusInputText';
import ListSocail from 'components/ListSocail';
import React from 'react';
import {
  Image,
  ImageBackground, StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface Props {}

const RegisterScreen = (props: Props) => {
  let ref_input1 = React.useRef(null);
  let ref_input2 = React.useRef(null);
  let ref_input3 = React.useRef(null);
  let ref_input4 = React.useRef(null);
  let ref_input5 = React.useRef(null);
  let ref_input6 = React.useRef(null);
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageContainer}
        source={IMAGE_PATHS.movie3}>
        <LinearGradient
          colors={ptColors.linearGradient}
          start={{x: 0, y: 0.8}}
          end={{x: 1.2, y: 0.9}}
          locations={[0, 0.5, 0.6]}
          style={styles.linearGradient}></LinearGradient>
        <BackgroundApp>
          <Text style={styles.cusText}>ĐĂNG KÍ</Text>
          <View style={styles.BottomView}>
            <Image
              resizeMode="contain"
              source={IMAGE_PATHS.logo}
              style={styles.image}
            />

            {/* */}
            <CusInputText
              inputRef={(ref: any) => (ref_input1.current = ref)}
              // @ts-ignore
              onSubmitEditing={() => ref_input2.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập tên người dùng"
              autoFocus={false}
              blurOnSubmit={false}
            />
            <CusInputText
              inputRef={(ref: any) => (ref_input2.current = ref)}
              // @ts-ignore
              onSubmitEditing={() => ref_input3.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập email"
              autoFocus={false}
              blurOnSubmit={false}
            />
            <CusInputText
              inputRef={(ref: any) => (ref_input3.current = ref)}
              // @ts-ignore
              onSubmitEditing={() => ref_input4.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập số điện thoại"
              autoFocus={false}
              blurOnSubmit={false}
            />
            <CusInputText
              inputRef={(ref: any) => (ref_input4.current = ref)}
              // @ts-ignore
              onSubmitEditing={() => ref_input5.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập địa chỉ"
              autoFocus={false}
              blurOnSubmit={false}
            />
            <CusInputText
              inputRef={(ref: any) => (ref_input5.current = ref)}
              // @ts-ignore
              onSubmitEditing={() => ref_input6.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập mật khẩu"
              autoFocus={false}
              blurOnSubmit={false}
            />
            <CusInputText
              inputRef={(ref: any) => (ref_input6.current = ref)}
              // @ts-ignore
              // onSubmitEditing={() => ref_input2.current.focus()}
              // onChangeText={(text: string) => setEmail(text)}
              // value={}
              lable="Nhập nhập lại mật khẩu"
              autoFocus={false}
              blurOnSubmit={false}
            />

            <CusButton title="Đăng kí" />
            <Text style={styles.textOr}>Hoặc</Text>

            <ListSocail />
          </View>
        </BackgroundApp>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // backgroundColor: ptColors.lightGreyColor,
  },
  BottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    zIndex: 4,
  },
  cusText: {
    color: ptColors.white,
    // marginTop: 50 * HEIGHT_SCALE_RATIO,
    margin: 10 * HEIGHT_SCALE_RATIO,
    fontFamily: fontFamily.CabinBold,
    fontSize: FS(22),
  },
  textOr: {
    textAlign: 'center',
    color: ptColors.white,
    marginVertical: 10 * WIDTH_SCALE_RATIO,
    fontSize: FS(16),
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    opacity: 0.4,
  },
  image: {
    height: 80,
    width: 150,
  },
});

export default RegisterScreen;
