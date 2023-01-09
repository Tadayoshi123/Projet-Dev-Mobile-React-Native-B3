import styled from 'styled-components';
import Theme from '../../../config/theme';

const BuyGameCard = styled.View`
  display: flex;
  background-color: ${Theme.colors.primary};
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

export default BuyGameCard;
