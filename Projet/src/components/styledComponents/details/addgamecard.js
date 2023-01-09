import styled from 'styled-components';
import Theme from '../../../config/theme';

const AddGameCard = styled.View`
  display: flex;
  background-color: ${Theme.colors.tertiary};
  border-radius: 4px;
  width: 400px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  flex-wrap: wrap;
`;

export default AddGameCard;
