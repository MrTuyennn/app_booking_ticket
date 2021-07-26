import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/fonts';
import React, {memo} from 'react';
import {G, Path, Polygon, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
}

const IconGoogle = (props: Props) => {
  return (
    <Svg
      height={props.height || 50 * HEIGHT_SCALE_RATIO}
      width={props.width || 50 * WIDTH_SCALE_RATIO}
      viewBox="0 0 291.32 291.32">
      <G>
        <Path
          fill={ptColors.redBtn}
          stroke={ptColors.redBtn}
          d="M145.66,0c80.113,0,145.66,65.547,145.66,145.66s-65.547,145.66-145.66,145.66S0,225.772,0,145.66
       S65.547,0,145.66,0z"
        />
        <G>
          <Polygon
            fill={ptColors.white}
            stroke={ptColors.white}
            points="219.4,121.079 219.4,137.466 235.786,137.466 235.786,153.853 219.4,153.853 219.4,170.24 
           203.013,170.24 203.013,153.853 186.626,153.853 186.626,137.466 203.013,137.466 203.013,121.079 		"
          />
          <Path
            fill={ptColors.white}
            stroke={ptColors.white}
            d="M71.919,186.626c-21.849-21.849-21.849-60.085,0.91-81.933
           c16.387-16.387,40.056-20.028,60.995-11.835l8.193,4.552l9.104,6.373l-14.566,14.566l-5.462-3.641
           c-12.745-8.193-30.953-6.373-42.787,5.462c-13.656,13.656-14.566,38.236,0,52.802c13.656,14.566,38.236,14.566,50.981,0
           c3.641-3.641,7.283-9.104,8.193-14.566v-1.821h-32.773v-18.207h51.891l0.91,4.552v12.745c-0.91,11.835-5.462,23.67-13.656,31.863
           C132.004,208.475,93.768,208.475,71.919,186.626z"
          />
        </G>
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

export default memo(IconGoogle);
