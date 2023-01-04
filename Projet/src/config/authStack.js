import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Theme from './theme';
import AvatarSearchBar from '../components/searchBar/avatarSearchBar';
import ProductNameSearchBar from '../components/styledComponents/searchBar/productnamesearchbar';
import {STEAM_KEY} from '@env';
import axios from 'axios';

const Stack = createNativeStackNavigator();

const APIList = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

// Requête axios qui récupère les données d'APIList et les stocke dans le state products puis on va aller les filtrer en fonction de leur nom et les afficher dans un FlatList sous la barre de recherche

const AuthStack = () => {
  // const ProductData = () => {
  //   const [products, setProducts] = useState([]);
  //   const [filteredProducts, setFilteredProducts] = useState([]);
  //   const navigation = useNavigation();

  //   async function getProductData() {
  //     const response = await axios({
  //       method: 'get',
  //       url: APIList,
  //       params: {
  //         ts: 1,
  //         limit: 5,
  //         offset: 5,
  //         apikey: STEAM_KEY,
  //       },
  //     });
  //     setProducts(response.data.applist.apps);
  //   }

  //   useEffect(() => {
  //     getProductData();
  //   }, [navigation]);

  //   // Fonction qui permet de filtrer les produits en fonction de leur nom

  //   const filterProducts = text => {
  //     if (text) {
  //       const filteredData = products.filter(item => {
  //         const itemData = item.name.toUpperCase();
  //         const textData = text.toUpperCase();
  //         return itemData.indexOf(textData) > -1;
  //       });
  //       setFilteredProducts(filteredData);
  //     } else {
  //       // Si le champ de recherche est vide, on affiche tous les produits
  //       setFilteredProducts(products);
  //     }
  //   };

  //   return (
  //     <FlatList
  //       data={products}
  //       keyExtractor={item => item.appid}
  //       renderItem={({item}) => (
  //         <TouchableOpacity
  //           onPress={() => navigation.navigate('Details', {item})}>
  //           <AvatarSearchBar
  //             imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.appid}/header.jpg`}
  //           />
  //           <ProductNameSearchBar>{item.name}</ProductNameSearchBar>
  //         </TouchableOpacity>
  //       )}
  //     />
  //   );
  // };

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
      <Stack.Screen name="Home" component={Home} options={{title: 'ACCUEIL'}} />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'DETAILS'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
