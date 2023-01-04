// Styled Component for React Native TouchableOpacity Named Tags for Steam Tags
import styled from 'styled-components/native';
import Theme from '../../../config/theme';

const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tags = styled.TouchableOpacity`
  background-color: ${Theme.colors.tertiary};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  align-items: center;
`;

const TagsText = styled.Text`
  color: ${Theme.colors.anchor};
`;

export {TagsContainer, Tags, TagsText};
