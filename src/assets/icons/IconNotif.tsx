import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}
const IconNotif = (props: Props) => {
  return (
    <Svg
      height={props.height || 20 * HEIGHT_SCALE_RATIO}
      width={props.width || 20 * WIDTH_SCALE_RATIO}
      fill={props.color || ptColors.white}
      viewBox="0 0 24 24">
      <G>
        <Path d="m21.379 16.913c-1.512-1.278-2.379-3.146-2.379-5.125v-2.788c0-3.519-2.614-6.432-6-6.92v-1.08c0-.553-.448-1-1-1s-1 .447-1 1v1.08c-3.387.488-6 3.401-6 6.92v2.788c0 1.979-.867 3.847-2.388 5.133-.389.333-.612.817-.612 1.329 0 .965.785 1.75 1.75 1.75h16.5c.965 0 1.75-.785 1.75-1.75 0-.512-.223-.996-.621-1.337z" />
        <Path d="m12 24c1.811 0 3.326-1.291 3.674-3h-7.348c.348 1.709 1.863 3 3.674 3z" />
      </G>
    </Svg>
  );
};

export default IconNotif;
