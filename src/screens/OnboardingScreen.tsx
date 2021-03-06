import {IconNext, IconRightarrow} from 'assets/icons';
import {ptColors} from 'common/colors';
import {ptFonts} from 'common/fonts';
import {
  HEIGHT,
  HEIGHT_SCALE_RATIO,
  WIDTH,
  WIDTH_SCALE_RATIO,
} from 'common/styles';
import {dataOnBoaring} from 'constants/data';
import {ThemeContext} from 'context/ThemeProvider';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

interface Props {}

const OnboardingScreen = (props: Props) => {
  const {dark, theme, toggle} = useContext(ThemeContext);
  const flatlistRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const handleViewableItemsChanged = useRef(({viewableItems}: any) => {
    setViewableItems(viewableItems);
  });

  useEffect(() => {
    // @ts-ignore
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    // @ts-ignore
    setCurrentPage(viewableItems[0].index);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true, // <-- Add this
    }).start();
  }, [viewableItems, fadeAnim]);
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  const handleNext = () => {
    if (currentPage == dataOnBoaring.length - 1) return;
    // @ts-ignore
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage == 0) return;
    // @ts-ignore
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    // @ts-ignore
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: dataOnBoaring.length - 1,
    });
  };
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }
  const renderFlatlistItem = ({item}: any) => {
    return (
      <View
        style={{
          width: WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={item.image}
          style={{...StyleSheet.absoluteFillObject}}>
          <LinearGradient
            colors={ptColors.linearGradient}
            start={{x: 0, y: 0.8}}
            end={{x: 1.2, y: 0.9}}
            locations={[0, 0.5, 0.6]}
            style={style.linearGradient}></LinearGradient>
          <View
            style={{
              position: 'absolute',
              width: '90%',
              bottom: HEIGHT / 3,
              flex: 1,
              marginHorizontal: 20 * WIDTH_SCALE_RATIO,
            }}>
            <Text
              style={[
                ptFonts.textcaptions,
                {color: ptColors.white, fontSize: 20, flex: 1},
              ]}>
              {item.description}
            </Text>
            <Text
              style={[ptFonts.textcaptions, {color: ptColors.white, flex: 1}]}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const renderTopSection = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 40 * HEIGHT_SCALE_RATIO,
          width: WIDTH,
          zIndex: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10 * 2,
            width: WIDTH,
          }}>
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={{
              padding: 10,
            }}>
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <Icon
              type="antdesign"
              name="left"
              style={{
                fontSize: 25,
                color: ptColors.black,
                opacity: currentPage == 0 ? 0 : 0,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text
              style={[
                ptFonts.textcaptions,
                {
                  fontSize: 18,
                  color: ptColors.green,
                  opacity: currentPage == dataOnBoaring.length - 1 ? 0 : 1,
                },
              ]}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView
        style={{
          position: 'absolute',
          bottom: 20,
          width: WIDTH,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10 * 2,
            paddingVertical: 10 * 2,
          }}>
          {/* Pagination */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {
              // No. of dots
              [...Array(dataOnBoaring.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 30,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor:
                      index == currentPage
                        ? ptColors.green
                        : ptColors.green + '20',
                    marginRight: 8,
                  }}
                />
              ))
            }
          </View>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage != dataOnBoaring.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: ptColors.origin,
              }}
              activeOpacity={0.8}>
              <IconRightarrow />
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <Animated.View
              style={{
                // opacity: fadeAnim,
                transform: [
                  {
                    translateY: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0], // 0 : 150, 0.5 : 75, 1 : 0
                    }),
                  },
                ],
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10 * 2,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: ptColors.origin,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: ptColors.white,
                    fontSize: 18,
                    marginLeft: 10,
                  }}>
                  Get Started
                </Text>
                <IconNext />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}> */}
      <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
        {/* TOP SECTION - Back & Skip button */}
        {renderTopSection()}

        {/* FLATLIST with pages */}
        <FlatList
          ref={flatlistRef}
          data={dataOnBoaring}
          contentContainerStyle={{}}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          // onMomentumScrollEnd={ev => {
          //   console.log(Math.floor(ev.nativeEvent.contentOffset.x / WIDTH));
          // }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderFlatlistItem}
          initialNumToRender={1}
          onViewableItemsChanged={handleViewableItemsChanged.current}
          viewabilityConfig={viewConfigRef.current}
          extraData={WIDTH}
        />
        {/* BOTTOM SECTION - pagination & next or GetStarted button */}
        {renderBottomSection()}
      </View>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textDescription: {
    fontSize: 18,
    fontWeight: '700',
  },
  textTitle: {
    fontSize: 14,
    color: ptColors.gray,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: ptColors.white,
    backgroundColor: 'transparent',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    opacity: 0.4,
  },
});
export default OnboardingScreen;
