import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Button = styled.TouchableOpacity`
  width: ${!Platform.OS ? '30%' : '40%'};
  height: 60px;
  align-items: center;
  border-width: 2px;
  elevation: 2;
  box-shadow: ${({theme}) => theme.colors.border} 0 2px 5px;
  background-color: ${({theme}) => theme.colors.grayLight};
  border-color: ${({theme}) => theme.colors.grayLight};
  flex-direction: row;
  gap: 10px;
  padding-left: 6px;
`;
