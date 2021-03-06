import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/fonts';
import React, {memo} from 'react';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconGmail = (props: Props) => {
  return (
    <Svg
      height={props.height || 20 * HEIGHT_SCALE_RATIO}
      width={props.width || 20 * WIDTH_SCALE_RATIO}
      fill={props.color || ptColors.black}
      viewBox="0 0 250.57 250.57">
      <Path
        d="M23.032,220.285h204.506c12.7,0,23.032-10.333,23.032-23.034V53.318c0-12.701-10.332-23.033-23.032-23.033H23.032
	C10.332,30.285,0,40.618,0,53.318v143.933C0,209.952,10.332,220.285,23.032,220.285z M15,53.318c0-4.436,3.601-8.033,8.032-8.033
	h204.506c4.433,0,8.032,3.597,8.032,8.033v143.933c0,4.437-3.6,8.034-8.032,8.034H23.032c-4.432,0-8.032-3.597-8.032-8.034V53.318z
	 M44.738,194.677h-15V56.529l93.674,60.815c1.102,0.715,2.643,0.716,3.748-0.002l93.673-60.813v138.148h-15V84.151l-70.507,45.774
	c-2.992,1.941-6.464,2.966-10.041,2.966s-7.049-1.025-10.039-2.965L44.738,84.151V194.677z"
      />
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

export default memo(IconGmail);
