import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './authStack';
import PublicStack from './publicStack';

const Stack = createNativeStackNavigator();

//Création du router
const Routes = props => {
  return (
    <NavigationContainer theme={StormTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SE CONNECTER" component={PublicStack} />
        <Stack.Screen name="MENU" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StormTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2c3e50',
  },
};

export default Routes;
