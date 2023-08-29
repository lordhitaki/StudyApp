import styled, {css} from 'styled-components/native';

export const BtCateg = styled.TouchableOpacity`
  margin-left: ${props => props.theme.spacings.small};
  margin-top: ${props => props.theme.spacings.small};
  width: 80px;
  height: 50px;
  background-color: ${props => props.theme.colors.error};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  ${props =>
    props.isSelected &&
    css`
      background-color: ${props => props.theme.colors.dimGray};
    `}
`;

export const Flat = styled.FlatList``;
