import React from 'react';
import LoginScreen from 'screens/Auth/LoginScreen';
import OnboardingScreen from 'screens/OnboardingScreen';
import SplashScreen from 'screens/SplashScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <RegisterScreen />
    </>
  );
};

export default App;
