import {IconFacebook, IconGoogle, IconGithub} from 'assets/icons';
import {HEIGHT_SCALE_RATIO, WIDTH} from 'common/styles';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  onPressGG?: () => void;
  onPressGit?: () => void;
  onPressFB?: () => void;
}

const ListSocail = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressGG}>
        <IconGoogle />
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressFB}>
        <IconFacebook />
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressGit}>
        <IconGithub />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WIDTH,
    justifyContent: 'space-evenly',
    marginVertical: 20 * HEIGHT_SCALE_RATIO,
  },
});
export default ListSocail;
