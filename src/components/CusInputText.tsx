import {ptColors} from 'common/colors';
import {fontFamily, FS} from 'common/fonts';
import {WIDTH} from 'common/styles';
import React, {memo} from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  lable?: any;
  value?: any;
  inputRef?: any;
  iconRights?: any;
}

const CusInputText = (props: Props) => {
  const [isShowLable, setIsShowLable] = React.useState(false);

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
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: ptColors.aqua,
            }}></View>
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
          blurOnSubmit={props.blurOnSubmit}
          onSubmitEditing={props.onSubmitEditing}
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: WIDTH - 30,
    marginTop: 45,
    backgroundColor: ptColors.white,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    // height: 60,
  },
  input: {
    flex: 1,
    color: ptColors.black,
    fontSize: FS(16),
    // fontFamily: fontFamily.MEDIUM,
  },
  label: {
    position: 'absolute',
    top: -30,
    left: 15,
  },
  textLabel: {
    color: ptColors.gray,
    fontSize: FS(14),
    fontFamily: fontFamily.MEDIUM,
  },
});

export default memo(CusInputText);
