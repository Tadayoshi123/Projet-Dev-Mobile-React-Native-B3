// SearchBar for the Stack Navigator in AuthStack.js
import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchView from '../styledComponents/searchBar/searchView';
import SearchBarProductName from '../styledComponents/searchBar/searchBarProductName';
import SearchBarProductImage from '../styledComponents/searchBar/searchBarProductImage';
import steamDetails from '../../config/steamDetails';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(steamDetails.apps);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => product.name.includes(search)),
    );
  }, [search, products]);

  const navigation = useNavigation();

  return (
    <SearchView>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.steam_appid}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {item: item.steam_appid})
            }>
            <SearchBarProductImage
              imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.steam_appid}/header.jpg`}
            />
            <SearchBarProductName>{item.name}</SearchBarProductName>
          </TouchableOpacity>
        )}
      />
    </SearchView>
  );
};

export default SearchBar;
