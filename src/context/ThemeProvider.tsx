import {ptColor} from 'constants/styles';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  children?: React.ReactNode;
}

const themes = {
  dark: {
    backgroundColor: ptColor.black,
    background: ptColor.black,
    color: ptColor.white,
  },
  light: {
    backgroundColor: ptColor.white,
    background: ptColor.white,
    color: ptColor.black,
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
