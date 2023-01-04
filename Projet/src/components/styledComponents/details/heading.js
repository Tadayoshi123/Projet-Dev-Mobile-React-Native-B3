// Styled Component for React Native Text Named Heading
import styled from 'styled-components/native';
import Theme from '../../../config/theme';

const Heading = styled.Text`
  font-size: 20px;
  color: ${Theme.colors.senary};
  font-weight: ${Theme.fonts.bold};
  margin: 10px;
  /* text-align: center; */
`;

export default Heading;
