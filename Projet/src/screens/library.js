import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList, TouchableOpacity} from 'react-native';
import ProductName from '../components/styledComponents/generalized/productname';

const Library = () => {
  const [library, setLibrary] = useState([]);

  const getLibrary = async () => {
    const library = await AsyncStorage.getItem('library');
    setLibrary(JSON.parse(library));
  };

  useEffect(() => {
    getLibrary();
  }, []);

  return (
    <FlatList
      data={library}
      renderItem={({item}) => (
        <TouchableOpacity
        // onClick={() => affiche la page du jeu avec les informations du jeu ainsi que celles de l'utilisateur (succès, temps de jeu, etc.)}
        >
          <ProductName>{item.name}</ProductName>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default Library;
