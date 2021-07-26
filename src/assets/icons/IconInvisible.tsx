import { ptColors } from 'common/colors';
import { HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO } from 'common/fonts';
import React, { memo } from 'react';
import { G, Path, Svg } from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconInvisible = (props: Props) => {
  return (
    <Svg
      height={props.height || 20 * HEIGHT_SCALE_RATIO}
      width={props.width || 20 * WIDTH_SCALE_RATIO}
      fill={props.color || ptColors.black}
      viewBox="0 0 469.44 469.44">
      <G>
        <G>
          <G>
            <Path d="M231.147,160.373l67.2,67.2l0.32-3.52c0-35.307-28.693-64-64-64L231.147,160.373z" />
            <Path
              d="M234.667,117.387c58.88,0,106.667,47.787,106.667,106.667c0,13.76-2.773,26.88-7.573,38.933l62.4,62.4
				c32.213-26.88,57.6-61.653,73.28-101.333c-37.013-93.653-128-160-234.773-160c-29.867,0-58.453,5.333-85.013,14.933l46.08,45.973
				C207.787,120.267,220.907,117.387,234.667,117.387z"
            />
            <Path
              d="M21.333,59.253l48.64,48.64l9.707,9.707C44.48,145.12,16.64,181.707,0,224.053c36.907,93.653,128,160,234.667,160
				c33.067,0,64.64-6.4,93.547-18.027l9.067,9.067l62.187,62.293l27.2-27.093L48.533,32.053L21.333,59.253z M139.307,177.12
				l32.96,32.96c-0.96,4.587-1.6,9.173-1.6,13.973c0,35.307,28.693,64,64,64c4.8,0,9.387-0.64,13.867-1.6l32.96,32.96
				c-14.187,7.04-29.973,11.307-46.827,11.307C175.787,330.72,128,282.933,128,224.053C128,207.2,132.267,191.413,139.307,177.12z"
            />
          </G>
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

export default memo(IconInvisible);
