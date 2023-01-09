import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Cart from '../screens/cart';
import Theme from './theme';
import AvatarSearchBar from '../components/searchBar/avatarSearchBar';
import ProductNameSearchBar from '../components/styledComponents/searchBar/productnamesearchbar';
import steamDetails from '../config/steamDetails';

const Stack = createNativeStackNavigator();

// Requête axios qui récupère les données d'APIList et les stocke dans le state products puis on va aller les filtrer en fonction de leur nom et les afficher dans un FlatList sous la barre de recherche

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
          // onChangeText: event => {
          //   ProductData.filterProducts(event.nativeEvent.text);
          // },
        },
      }}>
      <Stack.Screen
        name="MENU"
        component={Home}
        options={{title: 'GAME LIST'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'DETAILS'}}
      />
      <Stack.Screen name="Cart" component={Cart} options={{title: 'PANIER'}} />
    </Stack.Navigator>
  );
};

export default AuthStack;
