import {IconBack} from 'assets/icons';
import {ptColors} from 'common/colors';
import {FS, ptFonts} from 'common/fonts';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import BaseHeader, {BaseHeaderProps} from './BaseHeader';

export interface BaseHeaderAppProps extends BaseHeaderProps {
  navigation?: any;
  styleTitle?: any;
  title?: string;
  titleCenter?: boolean;
  onlytitle?: boolean;
  // leftIcon?: any;
}

const BaseHeaderApp = (props: BaseHeaderAppProps) => {
  if (props.onlytitle) {
    return (
      <BaseHeader
        children={
          <Text
            style={[
              ptFonts.textcaptions,
              {
                textAlign: props.titleCenter ? 'center' : 'left',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: FS(16),
                textTransform: 'uppercase',
                color: ptColors.black,
              },
            ]}>
            {props.title}
          </Text>
        }
        {...props}
      />
    );
  }
  return (
    <BaseHeader
      navigation={props.navigation}
      leftIcon={
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <IconBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color={ptColors.white}
          />
        </View>
      }
      children={
        <Text
          style={[
            ptFonts.textcaptions,
            {
              textAlign: props.titleCenter ? 'center' : 'left',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: FS(16),
              // textTransform: 'uppercase',
              color: ptColors.black,
            },
            props.styleTitle,
          ]}>
          {props.title}
        </Text>
      }
      {...props}></BaseHeader>
  );
};

BaseHeaderApp.defaultProps = {
  titleCenter: true,
};

export default BaseHeaderApp;
