import React from 'react';
import styled from 'styled-components';
import Theme from '../../config/theme';

const Avatar = ({imageSource}) => {
  const imageOption = {
    uri: imageSource,
  };

  return <ImageStyled source={imageOption} />;
};

const ImageStyled = styled.Image`
  // Width takes the full width of the parent
  width: 200px;
  height: 150px;
  margin: 10px;
  background-color: ${Theme.colors.primary};
`;
export default Avatar;
