import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

const addToLibrary = async (id, name) => {
  const library = await AsyncStorage.getItem('library');
  if (library) {
    const libArray = JSON.parse(library);
    const game = libArray.find(game => game.id === id);
    if (game) {
      ToastAndroid.show(
        `${game.name} is already in your library`,
        ToastAndroid.SHORT,
      );
    } else {
      libArray.push({id, name});
      await AsyncStorage.setItem('library', JSON.stringify(libArray));
      ToastAndroid.show('Game added to library', ToastAndroid.SHORT);
    }
  } else {
    await AsyncStorage.setItem('library', JSON.stringify([{id, name}]));
    ToastAndroid.show('Game added to library', ToastAndroid.SHORT);
  }
};

export default addToLibrary;
