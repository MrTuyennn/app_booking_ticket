import {ptColors} from 'common/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  children?: React.ReactNode;
}

const themes = {
  dark: {
    backgroundColor: ptColors.black,
    background: ptColors.black,
    color: ptColors.white,
  },
  light: {
    backgroundColor: ptColors.white,
    background: ptColors.white,
    color: ptColors.black,
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = React.createContext(initialState);

const ThemeProvider = (props: Props) => {
  const [dark, setDark] = React.useState(false); // Default theme is light

  // To toggle between dark and light modes
  const toggle = () => {
    setDark(!dark);
  };

  // Filter the styles based on the theme selected
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{theme, dark, toggle}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
