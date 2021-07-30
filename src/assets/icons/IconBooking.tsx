import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import React, {memo} from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconBooking = (props: Props) => {
  return (
    <Svg
      height={props.height || 25 * HEIGHT_SCALE_RATIO}
      width={props.width || 25 * WIDTH_SCALE_RATIO}
      fill={props.color || ptColors.white}
      viewBox="0 -87 432 432">
      <Path d="m278.90625 0h-248.90625c-16.5625.0195312-29.9804688 13.4375-30 30v197.421875c.0195312 16.5625 13.4375 29.980469 30 30h248.90625c16.558594-.019531 29.980469-13.4375 30-30v-197.421875c-.019531-16.5625-13.441406-29.9804688-30-30zm0 0" />
      <Path d="m328.90625 169.800781 103.09375 56.285157v-194.105469l-103.09375 56.285156zm0 0" />
    </Svg>
  );
};

export default memo(IconBooking);
