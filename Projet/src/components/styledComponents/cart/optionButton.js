import styled from 'styled-components';
import Theme from '../../../config/theme';

const OptionButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.button};
  margin: 5px;
  padding: 5px;
`;

const RemoveButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.button};
  margin: 5px;
  padding: 5px;
  align-items: center;
`;

export {OptionButton, RemoveButton};
