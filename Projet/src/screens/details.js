import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Avatar from '../components/avatar';
import HtmlTheme from '../config/htmltheme';
import RenderHtml from 'react-native-render-html';
import {STEAM_KEY} from '@env';
const APIDetails = 'https://store.steampowered.com/api/appdetails?appids=';
import isHtml from '../functions/isHtml';
import ProductName from '../components/styledComponents/details/productname';
import GameDescription from '../components/styledComponents/details/gamedescription';
import Heading from '../components/styledComponents/details/heading';
import {
  TagsContainer,
  Tags,
  TagsText,
} from '../components/styledComponents/details/tags';

//On recupere la props route à laquelle on a passé l'id d'un héro
const Details = ({route}) => {
  const [product, setProduct] = React.useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: APIDetails,
      params: {
        appids: route.params.id,
        ts: 1,
        apikey: STEAM_KEY, //La requête ressemble alors à https://store.steampowered.com/api/appdetails?appids=10&limit=20&ts=1&apikey par exemple quand on récupère Counter Strike
      },
    })
      .then(response => {
        console.log(response.data);
        setProduct(response.data[route.params.id].data);
        console.log(response.data[route.params.id].data);
        console.log(response.data[route.params.id].data.movies);
      })
      .catch(error => {
        console.log(error);
      });
    // }, [route.params?.id]);
  }, []);

  return (
    <ScrollView>
      <Avatar
        imageSource={`https://cdn.akamai.steamstatic.com/steam/apps/${route.params.id}/header.jpg`}
      />
      {/* Condition to check if there's html in product.name or not and if there is renderhtml the product.name else render it with ProductName*/}
      {isHtml(product.name) ? (
        <RenderHtml source={{html: product.name}} tagsStyles={HtmlTheme} />
      ) : (
        <ProductName>{product.name}</ProductName>
      )}
      {isHtml(product.release_date?.date) ? (
        <RenderHtml
          source={{html: product.release_date?.date}}
          tagsStyles={HtmlTheme}
        />
      ) : (
        <GameDescription>Released {product.release_date?.date}</GameDescription>
      )}

      {/* Tags corresponds to the genres of the product (the type of game for example) */}
      {/* Tags can be found into the genres object which contains a description that will be the title for the tag and an id for navigating between genres in the future */}
      {product.genres && (
        <>
          <Heading>TAGS</Heading>
          <TagsContainer>
            {product.genres.map(genre => (
              <Tags key={genre.id}>
                <TagsText>{genre.description}</TagsText>
              </Tags>
            ))}
          </TagsContainer>
        </>
      )}
      {/* Medias can be found inside  */}
      {product.about_the_game && (
        <>
          <Heading>ABOUT THIS GAME</Heading>
          {isHtml(product.about_the_game) ? (
            <RenderHtml
              source={{html: product.about_the_game}}
              tagsStyles={HtmlTheme}
            />
          ) : (
            <GameDescription>
              About The Game {product.about_the_game}
            </GameDescription>
          )}
        </>
      )}
      {/* System Requirements */}
      <Heading>SYSTEM REQUIREMENTS</Heading>
      {isHtml(product.pc_requirements?.minimum) ? (
        <RenderHtml
          source={{html: product.pc_requirements?.minimum}}
          tagsStyles={HtmlTheme}
        />
      ) : (
        <GameDescription>
          Minimum {product.pc_requirements?.minimum}
        </GameDescription>
      )}
      {product.pc_requirements?.recommended &&
        (isHtml(product.pc_requirements?.recommended) ? (
          <RenderHtml
            source={{html: product.pc_requirements?.recommended}}
            tagsStyles={HtmlTheme}
          />
        ) : (
          <GameDescription>
            Recommended {product.pc_requirements?.recommended}
          </GameDescription>
        ))}
    </ScrollView>
  );
};

export default Details;
