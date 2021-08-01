import {ptColors} from 'common/colors';
import React, {memo, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  item?: any;
  active?: any;
  onPress?: (...args: any[]) => void;
}

const {height, width} = Dimensions.get('screen');

const setWidth = (w: any) => {
  return (width / 100) * w;
};

const RenderCusItemCate = (props: Props) => {
  const {item, active, onPress} = props;

  const _onpress = () => {
    if (onPress) {
      onPress(item?.cates);
    }
  };
  return (
    <TouchableOpacity
      onPress={_onpress}
      activeOpacity={0.5}
      style={[
        styles.buttonCate,
        {backgroundColor: active ? ptColors.fbBlue : ptColors.white},
      ]}>
      <Text style={{color: active ? ptColors.white : ptColors.black}}>
        {item?.cates}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonCate: {
    width: setWidth(20),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    elevation: 8,
  },
});

export default memo(RenderCusItemCate);
