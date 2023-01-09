// Styled Component for React Native Text Named ProductName
import styled from 'styled-components/native';
import Theme from '../../../config/theme';

const ProductName = styled.Text`
  font-size: ${Theme.fontSizes.h3};
  color: ${Theme.colors.textColor};
  font-weight: ${Theme.fonts.bold};
  margin: 10px;
  /* text-align: center; */
`;

export default ProductName;
