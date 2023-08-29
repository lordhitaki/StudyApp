import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const Flat = styled.FlatList``;

export const BoxTitle = styled.View`
  width: 90%;
  margin-left: ${props => props.theme.spacings.large};
  margin-top: ${props => props.theme.spacings.xlarge};
`;

export const BoxCarroseul = styled.View`
  width: 90%;
  margin-top: ${props => props.theme.spacings.xlarge};
`;

export const Touch1 = styled.Pressable``;

export const Img = styled.Image`
  object-fit: contain;
  height: 200px;
  width: 100%;
`;
