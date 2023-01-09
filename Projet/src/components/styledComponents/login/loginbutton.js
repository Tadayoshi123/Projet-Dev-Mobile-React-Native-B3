import styled from 'styled-components';
import Theme from '../../../config/theme';

const LoginButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.button};
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  align-items: center;
`;

export default LoginButton;
