import steamDetails from '../config/steamDetails.json';
import React, {useEffect, useState} from 'react';
import ContainerView from '../components/styledComponents/home/containerview';
import ProductName from '../components/styledComponents/home/productname';
import {TouchableOpacity, SectionList, ToastAndroid} from 'react-native';
import ProductImage from '../components/styledComponents/productImage';
import {useNavigation} from '@react-navigation/native';
import CardView from '../components/styledComponents/home/cardview';
import InformationCard from '../components/styledComponents/home/informationContainer';
import {
  BuyButton,
  AddToLibraryButton,
  AddToWishlistButton,
} from '../components/styledComponents/generalized/buybutton';
import ButtonText from '../components/styledComponents/generalized/buttontext';
import Price from '../components/styledComponents/generalized/price';
import BuyGameCard from '../components/styledComponents/generalized/buygamecard';
import CategorieHeader from '../components/styledComponents/home/categorieheader';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Les objets de steamDetails sont accessibles via steamDetails.apps

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const filterGames = () => {
    const filteredGames = steamDetails.apps.filter(
      game => game.type === 'game',
    );
    return filteredGames;
  };

  const getAllUniqueGenres = () => {
    const genres = [];
    filterGames().forEach(game => {
      if (game.genres) {
        game.genres.forEach(genre => {
          if (!genres.includes(genre.description)) {
            genres.push(genre.description);
          }
        });
      }
    });
    return genres;
  };

  // Function that will use getAllUniqueGenres to create an array of objects with the genre as a key and an array of games as a value
  const createGenreObject = () => {
    const genres = getAllUniqueGenres();
    const genreObject = [];
    genres.forEach(genre => {
      const games = [];
      filterGames().forEach(game => {
        if (game.genres) {
          game.genres.forEach(gameGenre => {
            if (gameGenre.description === genre) {
              games.push(game);
            }
          });
        }
      });
      games.sort(() => 0.5 - Math.random() * 2);
      if (games.length >= 4) {
        const randomGames = games.slice(0, 4);
        genreObject.push({title: genre, data: randomGames});
      } else {
        genreObject.push({title: genre, data: games});
      }
    });
    return genreObject;
  };
  createGenreObject();

  const addToCart = async (id, name, price) => {
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
      const cartArray = JSON.parse(cart);
      const game = cartArray.find(game => game.id === id);
      if (game) {
        ToastAndroid.show('Game already in cart', ToastAndroid.SHORT);
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

  useEffect(() => {
    setProducts(filterGames());
  }, []);

  return (
    <ContainerView>
      <SectionList
        sections={createGenreObject()}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={{}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {id: item.steam_appid})
            }>
            <CardView>
              <ProductImage
                imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.steam_appid}/header.jpg`}
              />
              {item.is_free === true ? (
                <InformationCard>
                  <ProductName>{item.name}</ProductName>
                  <BuyGameCard>
                    <Price>Free</Price>
                    <AddToLibraryButton
                      onPress={() => {
                        navigation.navigate('Home');
                      }}>
                      <ButtonText>Add to Library</ButtonText>
                    </AddToLibraryButton>
                  </BuyGameCard>
                </InformationCard>
              ) : item.is_free === false && item.price_overview ? (
                <InformationCard>
                  <ProductName>{item.name}</ProductName>
                  <BuyGameCard>
                    <Price>{item.price_overview.final_formatted}</Price>
                    <BuyButton
                      onPress={() => {
                        addToCart(
                          item.steam_appid,
                          item.name,
                          item.price_overview.final_formatted,
                        );
                        navigation.navigate('Home');
                      }}>
                      <ButtonText>Add to Shopping Cart</ButtonText>
                    </BuyButton>
                  </BuyGameCard>
                </InformationCard>
              ) : (
                <InformationCard>
                  <ProductName>{item.name}</ProductName>
                  <BuyGameCard>
                    <Price>Not Available</Price>
                    <AddToWishlistButton
                      onPress={() => {
                        navigation.navigate('Cart');
                      }}>
                      <ButtonText>Add to Wishlist</ButtonText>
                    </AddToWishlistButton>
                  </BuyGameCard>
                </InformationCard>
              )}
            </CardView>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <CategorieHeader>{title}</CategorieHeader>
        )}
      />
    </ContainerView>
  );
};

export default Home;
