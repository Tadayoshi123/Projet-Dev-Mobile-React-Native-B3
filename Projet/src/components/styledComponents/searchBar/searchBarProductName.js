// Styled Component for React Native Text Named SearchBarProductName
import styled from 'styled-components/native';
import Theme from '../../../config/theme';

const SearchBarProductName = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.textColor};
  font-weight: ${Theme.fonts.bold};
  margin: 10px;
  /* text-align: center; */
`;

export default SearchBarProductName;
