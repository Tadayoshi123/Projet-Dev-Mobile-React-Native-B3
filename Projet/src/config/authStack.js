import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Cart from '../screens/cart';
import Theme from './theme';
import SearchBar from '../components/searchBar';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.secondary,
        },
        headerTintColor: Theme.colors.senary,
        headerTitleStyle: {
          fontWeight: 'thin',
          fontFamily: Theme.fonts.thin,
          fontSize: 36,
        },
        headerSearchBarOptions: {
          placeholder: 'Rechercher',
          headerIconColor: Theme.colors.senary,
          textColor: Theme.colors.senary,
          hintTextColor: Theme.colors.senary,
          barTintColor: Theme.colors.tertiary,
          shouldShowHintSearchIcon: false,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Game List'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Game Details'}}
      />
      <Stack.Screen name="Cart" component={Cart} options={{title: 'Cart'}} />
    </Stack.Navigator>
  );
};

export default AuthStack;
