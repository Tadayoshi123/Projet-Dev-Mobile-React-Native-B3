import React, {useState, useEffect} from 'react';
import CartContainerView from '../components/styledComponents/cart/containerView';
import CartView from '../components/styledComponents/cart/cartView';
import ProductImage from '../components/styledComponents/generalized/productImage';
import ProductName from '../components/styledComponents/generalized/productname';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Price from '../components/styledComponents/generalized/price';
import BuyGameCard from '../components/styledComponents/generalized/buygamecard';
import {BuyButton} from '../components/styledComponents/generalized/buybutton';
import ButtonContainer from '../components/styledComponents/cart/buttonContainer';
import ControlPanel from '../components/styledComponents/cart/controlPanel';
import TextButton from '../components/styledComponents/cart/textButton';
import {
  OptionButton,
  RemoveButton,
} from '../components/styledComponents/cart/optionButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import notifee from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ToastAndroid, Text} from 'react-native';
// import addToLibrary from '../functions/addToLibrary';
import Theme from '../config/theme';

const Cart = () => {
  // retrieve the cart from AsyncStorage and set it to the state
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigation = useNavigation();

  const getCart = async () => {
    const cart = await AsyncStorage.getItem('cart');
    setCart(JSON.parse(cart));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.price.replace(',', '.').replace('€', ''));
    });
    setTotalPrice(total);
  };

  const removeItem = async id => {
    const newCart = cart.filter(item => item.id !== id);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    ToastAndroid.show('Item succesfully removed from cart', ToastAndroid.SHORT);
    setCart(newCart);
  };

  const removeAllItems = async () => {
    await AsyncStorage.removeItem('cart');
    setCart([]);
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const createNotification = async () => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'Cart Notification',
      body: `You have purchased ${
        cart.length
      } games for a total of ${totalPrice.toFixed(
        2,
      )}€, they have been added to your library`,
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher',
      },
    });
  };

  return (
    <CartContainerView>
      <ControlPanel>
        <BuyGameCard>
          <Price>Total: {totalPrice.toFixed(2)}€</Price>
          {/* TODO: Ajouter les produits achetés dans la bibliothèque et se rendre sur cette page grâce au bouton ci-dessous */}
          <BuyButton onPress={() => createNotification()}>
            <TextButton>Purchase</TextButton>
          </BuyButton>
        </BuyGameCard>
        <RemoveButton onPress={() => removeAllItems()}>
          <TextButton>Remove items</TextButton>
        </RemoveButton>
        <OptionButton onPress={() => navigation.navigate('Home')}>
          <TextButton>Continue shopping</TextButton>
        </OptionButton>
      </ControlPanel>
      {cart.length ? (
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <CartView>
              <ButtonContainer
                onPress={() => navigation.navigate('Details', {id: item.id})}>
                <ProductImage
                  imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.id}/header.jpg`}
                />
                <ProductName>{item.name}</ProductName>
                <Price>{item.price}</Price>
              </ButtonContainer>
              <RemoveButton onPress={() => removeItem(item.id)}>
                <Icon
                  name="remove"
                  size={20}
                  color={`${Theme.colors.textColor}`}
                />
              </RemoveButton>
            </CartView>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>No data to display</Text>
      )}
    </CartContainerView>
  );
};

export default Cart;
