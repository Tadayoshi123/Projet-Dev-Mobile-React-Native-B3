import styled from 'styled-components';
import Theme from '../../../config/theme';

const CartView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.colors.secondary};
`;

export default CartView;
