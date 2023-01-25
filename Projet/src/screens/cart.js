import React, {useState, useEffect} from 'react';
import ContainerView from '../components/styledComponents/generalized/containerview';
import ProductImage from '../components/styledComponents/productImage';
import ProductName from '../components/styledComponents/home/productname';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Price from '../components/styledComponents/generalized/price';
import CartView from '../components/styledComponents/cart/cartView';
import {FlatList} from 'react-native';

const Cart = () => {
  // retrieve the cart from AsyncStorage and set it to the state
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('cart').then(cart => {
      if (cart) {
        JSON.parse(cart).forEach(item => {
          // console.log(item);
          setCart(cart => [...cart, item]);
        });
      }
    });
  }, []);

  // Console.log() every id of items in the cart
  // AsyncStorage.getItem('cart').then(cart => {
  //   if (cart) {
  //     JSON.parse(cart).forEach(item => {
  //       console.log(item);
  //     });
  //   }
  // });

  // calculate the total price of the cart
  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.price.replace(',', '.').replace('€', ''));
    });
    setTotalPrice(total);
  }, [cart]);

  const renderItem = ({item}) => {
    return (
      <CartView>
        <ProductImage
          imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.id}/header.jpg`}
        />
        <ProductName>{item.name}</ProductName>
        <Price>{item.price}</Price>
      </CartView>
    );
  };

  return (
    <ContainerView>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Price>Total: {totalPrice}€</Price>
    </ContainerView>
  );
};

export default Cart;
