import styled from 'styled-components';
import Theme from '../../../config/theme';

const BuyButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.buy_button};
  margin: 5px;
  padding: 5px;
`;

const AddToLibraryButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.add_button};
  margin: 5px;
  padding: 5px;
`;

const AddToWishlistButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.wishlist_button};
  margin: 5px;
  padding: 5px;
`;

export {BuyButton, AddToLibraryButton, AddToWishlistButton};
