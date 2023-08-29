import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export const BoxLogo = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const BoxBt = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

export const Flat = styled.FlatList``;

export const BoxList = styled.View``;

export const Body = styled.View``;

export const Img = styled.Image`
  height: 110px;
  width: 110px;
`;

export const Touch = styled.TouchableOpacity`
  ${props =>
    props.isSelected &&
    css`
      border-bottom-color: red;
      border-right-color: red;
      border-width: 4px;
      border-radius: 60px;
      elevation: 24;
    `}
`;
