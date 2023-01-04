import React from 'react';
// import {SafeAreaView, Text, View} from 'react-native';
import Styled from 'styled-components';
import Routes from './src/config/routes';
import {ThemeProvider} from 'styled-components';
import Theme from './src/config/theme';

//On mets les routes dans un composant "Routes"
const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
