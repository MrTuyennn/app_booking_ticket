import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/fonts';
import React, {memo} from 'react';
import {Circle, G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconFacebook = (props: Props) => {
  return (
    <Svg
      fill={props.color}
      height={props.height || 50 * HEIGHT_SCALE_RATIO}
      width={props.width || 50 * WIDTH_SCALE_RATIO}
      viewBox="0 0 112.196 112.196">
      <G>
        <Circle
          fill={ptColors.white}
          stroke={ptColors.fbBlue}
          cx="56.098"
          cy="56.098"
          r="56.098"
        />
        <Path
          fill={ptColors.fbBlue}
          stroke={ptColors.fbBlue}
          d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
		c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
        />
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
};

export default memo(IconFacebook);
