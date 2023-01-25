import React from 'react';
import styled from 'styled-components';
import Theme from '../../../config/theme';

const SearchBarProductImage = ({imageSource}) => {
  const imageOption = {
    uri: imageSource,
  };

  return <ImageStyled source={imageOption} />;
};

const ImageStyled = styled.Image`
  // Since the image will be displayed in some sort of dropdown menu, we need to make sure that the image is not too big
  width: 200px/4;
  height: 150px/4;
  /* aspect-ratio: 1; */
  margin: 10px;
  background-color: ${Theme.colors.primary};
`;
export default SearchBarProductImage;
