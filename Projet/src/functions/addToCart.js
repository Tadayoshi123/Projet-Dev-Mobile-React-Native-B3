import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

const addToCart = async (id, name, price) => {
  const cart = await AsyncStorage.getItem('cart');
  if (cart) {
    const cartArray = JSON.parse(cart);
    const game = cartArray.find(game => game.id === id);
    if (game) {
      ToastAndroid.show(
        `${game.name} was already added to the cart`,
        ToastAndroid.SHORT,
      );
    } else {
      cartArray.push({id, name, price});
      await AsyncStorage.setItem('cart', JSON.stringify(cartArray));
      ToastAndroid.show('Game added to cart', ToastAndroid.SHORT);
    }
  } else {
    await AsyncStorage.setItem('cart', JSON.stringify([{id, name, price}]));
    ToastAndroid.show('Game added to cart', ToastAndroid.SHORT);
  }
};

export default addToCart;
