import {IconGmail, IconInvisible, IconVisibility} from 'assets/icons';
import {ptColors} from 'common/colors';
import {fontFamily, FS} from 'common/fonts';
import {WIDTH, HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface Props extends TextInputProps {
  lable?: any;
  value?: any;
  inputRef?: any;
  iconRights?: any;
  isPw?: boolean;
}

const CusInputText = (props: Props) => {
  const [isShowLable, setIsShowLable] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(
    props.isPw ? true : false,
  );

  const _onForcus = (boolean: boolean) => {
    setIsShowLable(boolean);
  };
  return (
    <View
      style={[
        styles.root,
        {
          borderColor: isShowLable ? ptColors.mRed : 'transparent',
          borderWidth: isShowLable ? 1 : undefined,
        },
      ]}>
      {isShowLable && (
        <View style={styles.label}>
          <Text style={styles.textLabel}>{props.lable}</Text>
        </View>
      )}
      {!!props.value && (
        <View style={styles.label}>
          <Text style={styles.textLabel}>{props.lable}</Text>
        </View>
      )}
      <View style={[styles.container]}>
        {props.iconRights && (
          <View style={{marginRight: 5 * WIDTH_SCALE_RATIO}}>
            {props.iconRights}
          </View>
        )}
        <TextInput
          {...props}
          // editable={false}
          underlineColorAndroid="transparent"
          value={props.value}
          placeholder={props.lable}
          placeholderTextColor={isShowLable ? 'transparent' : ptColors.gray}
          style={styles.input}
          onFocus={() => _onForcus(true)}
          onBlur={() => _onForcus(false)}
          ref={input => {
            typeof props.inputRef === 'function' &&
              props.inputRef(input) &&
              typeof props.inputRef === 'object' &&
              props.inputRef;
          }}
          secureTextEntry={isShowPassword}
          blurOnSubmit={props.blurOnSubmit}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType="done"
        />
        {props.isPw && (
          <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword ? <IconVisibility /> : <IconInvisible />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
CusInputText.defaultProps = {
  isPw: false,
};
const styles = StyleSheet.create({
  root: {
    width: (WIDTH - 30) * WIDTH_SCALE_RATIO,
    marginTop: 45,
    backgroundColor: ptColors.white,
    marginHorizontal: 20 * WIDTH_SCALE_RATIO,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7 * WIDTH_SCALE_RATIO,
  },
  input: {
    flex: 1,
    color: ptColors.black,
    fontSize: FS(16),
  },
  label: {
    position: 'absolute',
    top: -30 * HEIGHT_SCALE_RATIO,
    left: 15 * WIDTH_SCALE_RATIO,
  },
  textLabel: {
    color: ptColors.gray,
    fontSize: FS(14),
  },
});

export default memo(CusInputText);
