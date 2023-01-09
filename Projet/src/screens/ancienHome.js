import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Avatar from '../components/avatar';
import {STEAM_KEY} from '@env';
import ContainerView from '../components/styledComponents/home/containerview';
import ProductName from '../components/styledComponents/home/productname';

const APIList = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';
const offset = 20;

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(0);
  useEffect(() => {
    // Requête axios pour récupérer la liste des produits d'APIList et la mettre dans le state products
    axios({
      method: 'get',
      url: APIList,
      params: {
        limit: 20,
        offset: page * offset,
        apikey: STEAM_KEY,
      },
    })
      .then(response => {
        console.log(response.data.applist.apps);
        setProducts(response.data.applist.apps);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {id: item.appid})}>
        <Avatar
          imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${item.appid}/header.jpg`}
        />
        <ProductName>{item.name}</ProductName>
      </TouchableOpacity>
    );
  };

  return (
    <ContainerView>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.appid}
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.4}
      />
    </ContainerView>
  );
};

export default Home;
