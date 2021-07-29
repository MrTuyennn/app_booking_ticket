import { IconBack } from 'assets/icons';
import { ptColors } from 'common/colors';
import { HEIGHT_SCALE_RATIO, WIDTH, WIDTH_SCALE_RATIO } from 'common/styles';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface BaseHeaderProps {
  children?: React.ReactNode;
  leftIcon?: any;
  onClickLeftIcon?: () => void;
  styleLeftIcon?: any;

  rightIcon?: any;
  onClickRightIcon?: () => void;
  styleRightIcon?: any;

  rightIcon2?: any;
  onClickRightIcon2?: () => void;
  styleRightIcon2?: any;

  onlytitle?: boolean;

  navigation?: any;
}

const BaseHeader = (props: BaseHeaderProps) => {
  if (props.onlytitle) {
    return (
      <View
        style={{
          height: 30 * HEIGHT_SCALE_RATIO,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>{props.children}</View>
      </View>
    );
  }
  return (
    <View
      style={[styles.header, {height: 35 * HEIGHT_SCALE_RATIO}] as ViewStyle}>
      {props.leftIcon ? (
        <TouchableOpacity
          onPress={() =>
            props.onClickLeftIcon
              ? props.onClickLeftIcon
              : props.navigation.goBack()
          }
          style={{
            marginHorizontal: 10,
          }}>
          {props.leftIcon}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            marginHorizontal: 10,
          }}>
          <IconBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color={ptColors.transparent}
          />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>{props.children}</View>
      {props.rightIcon ? (
        <TouchableOpacity
          onPress={() => props.onClickRightIcon}
          style={{
            marginHorizontal: 10,
          }}>
          {props.rightIcon}
        </TouchableOpacity>
      ) : (
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: 'transparent',
          }}>
          <IconBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color="transparent"
          />
        </View>
      )}

      {props.rightIcon2 ? (
        <TouchableOpacity
          onPress={props.onClickRightIcon2}
          style={{
            marginHorizontal: 10,
          }}>
          {props.rightIcon2}
        </TouchableOpacity>
      ) : (
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: 'transparent',
          }}>
          <IconBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color="transparent"
          />
        </View>
      )}
    </View>
  );
};

BaseHeader.defaultProps = {
  onlytitle: false,
};

const styles = StyleSheet.create({
  header: {
    zIndex: 9999,
    borderTopWidth: 0,
    height: 56 * HEIGHT_SCALE_RATIO,
    width: WIDTH,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
});

export default BaseHeader;
