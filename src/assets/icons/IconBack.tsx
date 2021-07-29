import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconBack = (props: Props) => {
  return (
    <Svg
      height={props.height || 100}
      width={props.width || 100}
      viewBox="0 0 240.823 240.823">
      <G>
        <Path
          fill={props.color}
          id="Chevron_Right"
          d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179   l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816   C52.942,116.507,52.942,124.327,57.633,129.007z"
        />
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
        <G></G>
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

export default IconBack;
