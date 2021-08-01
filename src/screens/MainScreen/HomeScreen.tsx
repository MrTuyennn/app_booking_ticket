import {IconMenu, IconNotif} from 'assets/icons';
import {ptColors} from 'common/colors';
import {fontFamily, FS} from 'common/fonts';
import {HEIGHT_SCALE_RATIO} from 'common/styles';
import BackgroundApp from 'components/BackgroundApp';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import {Categories} from 'constants/data';
import RenderCusItemCate from 'components/CusFl/RenderCusItemCate';
import ItemSeparator from 'components/CusFl/ItemSeparator';

interface Props {}

const HomeScreen = (props: Props) => {
  const [active, setActive] = useState('Tất cả');
  return (
    <BackgroundApp
      appBar={{
        leftIcon: <IconMenu />,
        onClickLeftIcon: () => console.log('toogle'),
        styleLeftIcon: styles.styleLeftIcon,
        rightIcon: <IconNotif />,
        onClickRightIcon: () => console.log('Click Nhận thông báo'),
        rightIcon2: (
          <Image
            resizeMode="contain"
            style={styles.imageAvatar}
            source={{
              uri: 'https://lh3.googleusercontent.com/ogw/ADea4I6i_tWcdxToQZN7fND4Qr-nO_sifb0nwM1jaojVKQ=s32-c-mo',
            }}
          />
        ),
      }}>
      <View style={styles.container}>
        <Text style={styles.textUser}>Xin chào Tuyên,</Text>
        <Text style={styles.textSup}>Chọn bộ phim mà bạn yêu thích nhất</Text>

        <View style={styles.Categories}>
          <Text style={styles.text}>Thể loại</Text>
          <Text style={styles.text}>Tất cả</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.content}
          horizontal
          data={Categories}
          bounces={false}
          decelerationRate="fast"
          keyExtractor={(_, index) => _.id.toString()}
          showsHorizontalScrollIndicator={false}
          // ListHeaderComponent={() => <ItemSeparator width={20} />}
          // ListEmptyComponent={() => return <Text></Text>}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <RenderCusItemCate
              active={item.cates === active ? true : false}
              item={item}
              onPress={cates => setActive(cates)}
            />
          )}
        />
      </View>
    </BackgroundApp>
  );
};

const styles = StyleSheet.create({
  imageAvatar: {
    height: 30 * HEIGHT_SCALE_RATIO,
    width: 30 * HEIGHT_SCALE_RATIO,
    borderRadius: 60,
  },
  styleLeftIcon: {
    marginLeft: 20 * HEIGHT_SCALE_RATIO,
  },
  container: {
    margin: 16 * HEIGHT_SCALE_RATIO,
    marginTop: 20 * HEIGHT_SCALE_RATIO,
  },
  textUser: {
    color: ptColors.white,
    fontSize: FS(22),
    fontWeight: 'bold',
  },
  textSup: {
    fontSize: FS(16),
    color: ptColors.dGrey,
    fontFamily: fontFamily.MEDIUM,
    marginTop: 5 * HEIGHT_SCALE_RATIO,
  },
  content: {
    marginTop: 20 * HEIGHT_SCALE_RATIO,
  },
  Categories: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 18 * HEIGHT_SCALE_RATIO,
  },
  text: {
    color: ptColors.white,
    fontFamily: fontFamily.MEDIUM,
    fontSize: FS(19),
  },
});

export default HomeScreen;
