import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Cart from '../screens/cart';
import Library from '../screens/library';
import Theme from './theme';
import SearchBar from '../components/searchBar';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();
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
          shouldShowHintSearchIcon: true,
          onChangeText: () => {
            SearchBar;
          },
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <FontAwesome5
              name="shopping-cart"
              size={24}
              color={Theme.colors.senary}
            />
          </TouchableOpacity>
        ),
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
      <Stack.Screen
        name="Library"
        component={Library}
        options={{title: 'Library'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
