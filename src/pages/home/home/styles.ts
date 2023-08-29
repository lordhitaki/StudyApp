import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const Load = styled.ActivityIndicator``;

export const Scroll = styled.ScrollView``;

export const Body = styled.View`
  width: 100%;
  height: 100%;
`;

export const BoxText = styled.View`
  width: 90%;
  margin-left: 20px;
`;

export const Touch = styled.TouchableOpacity;

export const Touch1 = styled.Pressable``;

export const BoxCarro = styled.View``;

export const BoxCarroseul = styled.View``;

export const Img = styled.Image`
  object-fit: contain;
  height: 180px;
  width: 100%;
`;
export const Img1 = styled.Image`
  object-fit: contain;
  height: 180px;
  width: 180px;
`;

export const Flat = styled.FlatList``;
