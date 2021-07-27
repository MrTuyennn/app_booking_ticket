import {IMAGE_PATHS} from 'assets/images';
import {ptColors} from 'common/colors';
import {fontFamily, FS} from 'common/fonts';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import BackgroundApp from 'components/BackgroundApp';
import CusButton from 'components/CusButton';
import CusInputText from 'components/CusInputText';
import ListSocail from 'components/ListSocail';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface Props {}

const LoginScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let ref_input2 = React.useRef(null);
  let ref_input1 = React.useRef(null);
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
          <Text style={styles.cusText}>ĐĂNG NHẬP</Text>
          <View style={styles.BottomView}>
            <Image
              resizeMode="contain"
              source={IMAGE_PATHS.logo}
              style={styles.image}
            />
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
    marginTop: 50 * HEIGHT_SCALE_RATIO,
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
    height: 100,
    width: 150,
  },
});
export default LoginScreen;
