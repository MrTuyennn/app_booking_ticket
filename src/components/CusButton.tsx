import {ptColors} from 'common/colors';
import {WIDTH, WIDTH_SCALE_RATIO, HEIGHT_SCALE_RATIO} from 'common/fonts';
import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: String;
  titileStyle?: any;
}

const CusButton = (props: Props) => {
  const {title, titileStyle} = props;
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Text style={[titileStyle, styles.titleContainer]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: (WIDTH - 30) * WIDTH_SCALE_RATIO,
    alignItems: 'center',
    padding: 10 * WIDTH_SCALE_RATIO,
    elevation: 0,
    borderRadius: 5,
    borderWidth: 0,
    marginVertical: 10 * HEIGHT_SCALE_RATIO,
    backgroundColor: ptColors.redBtn,
  },
  titleContainer: {
    textTransform: 'uppercase',
    color: ptColors.white,
  },
});

export default memo(CusButton);
