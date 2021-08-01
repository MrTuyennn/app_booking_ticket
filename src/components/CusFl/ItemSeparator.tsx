import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  height?: number;
  width?: number;
}

const ItemSeparator = (props: Props) => {
  const {height, width} = props;
  return <View style={{height, width}} />;
};

ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};

export default ItemSeparator;
