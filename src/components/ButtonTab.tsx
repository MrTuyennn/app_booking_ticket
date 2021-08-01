import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO} from 'common/styles';
import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  icon?: any;
  lableText?: any;
  isCheck?: any;
}

const ButtonTab = (props: Props) => {
  const {icon, lableText, isCheck} = props;
  return (
    <View style={[styles.buttonContainer]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View
        style={[
          styles.dot,
          {backgroundColor: isCheck ? ptColors.white : undefined},
        ]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {},
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    marginTop: 5 * HEIGHT_SCALE_RATIO,
  },
});
export default memo(ButtonTab);
