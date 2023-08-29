import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;

export const BoxSelect = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.dark};
  width: 100%;
  height: 60px;
`;
export const BoxSelected1 = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.error};
  justify-content: center;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      background-color: ${props => props.theme.colors.error};
    `}
`;
export const BoxSelected2 = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.error};
  justify-content: center;
  align-items: center;
  ${props =>
    props.isSelected &&
    css`
      background-color: ${props => props.theme.colors.error};
    `}
`;

export const Flat = styled.FlatList``;

export const BoxCarroseul = styled.View`
  width: 100%;
`;

export const Touch1 = styled.Pressable``;

export const Img = styled.Image`
  object-fit: contain;
  height: 200px;
  width: 100%;
`;

export const BoxCateg = styled.View`
  margin-bottom: 20px;
`;
