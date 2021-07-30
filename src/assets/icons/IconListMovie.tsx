import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import React, {memo} from 'react';
import {G, Path, Svg} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconListMovie = (props: Props) => {
  return (
    <Svg
      height={props.height || 25 * HEIGHT_SCALE_RATIO}
      width={props.width || 25 * WIDTH_SCALE_RATIO}
      fill={props.color || ptColors.white}
      viewBox="0 0 212.045 212.045">
      <Path
        d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
       c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
       c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
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

export default memo(IconListMovie);
