import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconBooking, IconHome, IconListMovie, IconUser} from 'assets/icons';
import {ptColors} from 'common/colors';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'common/styles';
import {CONSTANTS} from 'constants/constants';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import BookingScreen from 'screens/MainScreen/BookingScreen';
import HomeScreen from 'screens/MainScreen/HomeScreen';
import ListMovieScreen from 'screens/MainScreen/ListMovieScreen';
import ProfileScreen from 'screens/MainScreen/ProfileScreen';
import ButtonTab from 'components/ButtonTab';
interface Props {}
const Tab = createBottomTabNavigator();

const BottomNavigator = (props: Props) => {
  // const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName={CONSTANTS.HomeScreen}
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color}) => {
          if (route.name === CONSTANTS.HomeScreen) {
            return (
              <ButtonTab
                isCheck={focused}
                icon={
                  <IconHome color={focused ? ptColors.white : ptColors.gray} />
                }
              />
            );
          } else if (route.name === CONSTANTS.BookingScreen) {
            return (
              <ButtonTab
                isCheck={focused}
                icon={
                  <IconBooking
                    color={focused ? ptColors.white : ptColors.gray}
                  />
                }
              />
            );
          } else if (route.name === CONSTANTS.ListMovieScreen) {
            return (
              <ButtonTab
                isCheck={focused}
                icon={
                  <IconListMovie
                    color={focused ? ptColors.white : ptColors.gray}
                  />
                }
              />
            );
          } else if (route.name === CONSTANTS.ProfileScreen) {
            return (
              <ButtonTab
                isCheck={focused}
                icon={
                  <IconUser color={focused ? ptColors.white : ptColors.gray} />
                }
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: ptColors.yellow,
        inactiveTintColor: ptColors.redBtn,
        style: {
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: ptColors.appColors,
          height: 50 * WIDTH_SCALE_RATIO,
          // + insets.bottom
          borderTopWidth: 0,
        },
        // tabStyle: {
        //   height:  50 * WIDTH_SCALE_RATIO,
        // },
        adaptive: false,
        showLabel: false,
      }}>
      <Tab.Screen name={CONSTANTS.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={CONSTANTS.BookingScreen} component={BookingScreen} />
      <Tab.Screen
        name={CONSTANTS.ListMovieScreen}
        component={ListMovieScreen}
      />
      <Tab.Screen name={CONSTANTS.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};



export default BottomNavigator;
