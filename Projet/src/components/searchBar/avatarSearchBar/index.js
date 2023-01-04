import React from 'react';
import styled from 'styled-components';
import Theme from '../../../config/theme';

const AvatarSearchBar = ({imageSource}) => {
  const imageOption = {
    uri: imageSource,
  };

  return <ImageStyled source={imageOption} />;
};

const ImageStyled = styled.Image`
  // Since the image will be displayed in some sort of dropdown menu, we need to make sure that the image is not too big
  width: useWindowDimensions() .width / 2;
  height: undefined;
  aspect-ratio: 1;
  margin: 10px;
  resize-mode: contain;
  background-color: ${Theme.colors.primary};
`;
export default AvatarSearchBar;
