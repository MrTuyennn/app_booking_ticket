import {dataOnBoaring} from 'constants/data';
import {HEIGHT, ptColor, styles, WIDTH} from 'constants/styles';
import {ThemeContext} from 'context/ThemeProvider';
import React, {useContext, useRef, useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {IconNext, IconRightarrow} from 'assets/icons';

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
      duration: 1000,
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
  const renderFlatlistItem = ({item}: any) => {
    return (
      <View
        style={{
          width: WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <View
          style={{
            height: 100,
            width: 100,
          }}> */}
        {item.image}
        {/* </View> */}
        <View
          style={{
            marginHorizontal: 5,
          }}>
          <Text style={[styles.textcaptions, style.textDescription]}>
            {item.description}
          </Text>
          <Text style={[styles.textcaptions, style.textTitle]}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };
  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10 * 2,
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
                color: ptColor.black,
                opacity: currentPage == 0 ? 0 : 0,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text
              style={[
                styles.textcaptions,
                {
                  fontSize: 18,
                  color: ptColor.greenSuccess,
                  opacity: currentPage == dataOnBoaring.length - 1 ? 0 : 1,
                },
              ]}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
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
                        ? ptColor.greenSuccess
                        : ptColor.greenSuccess + '20',
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
                backgroundColor: ptColor.origin,
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
                  backgroundColor: ptColor.origin,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: ptColor.white,
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
    color: ptColor.textSubColor,
  },
});
export default OnboardingScreen;
