import styled from 'styled-components';
import Theme from '../../../config/theme';

const CardView = styled.View`
  background-color: ${Theme.colors.black_opacity};
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  border-radius: 4px;
  color: ${Theme.colors.senary};
`;

export default CardView;
