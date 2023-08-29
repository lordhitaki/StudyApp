import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
`;
export const Scroll = styled.ScrollView``;

export const ImgDetail = styled.Image`
  width: 100%;
  height: 600px;
`;
export const BoxBack = styled.View`
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;
  elevation: 30;
  background-color: ${props => props.theme.colors.shadown};
`;

export const Touch = styled.TouchableOpacity``;

export const BoxName = styled.Text`
  position: absolute;
  text-align: center;
  width: 60%;
  left: 80px;
  top: 50px;
  elevation: 550;
  background-color: ${props => props.theme.colors.shadown};
`;

export const BoxButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const Play = styled.View`
  align-items: center;
  justify-content: center;
  /* position: absolute; */
`;
export const Play2 = styled.View`
  bottom: 0px;
  position: absolute;
  background-color: ${props => props.theme.colors.shadown};
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const BoxSinopse = styled.Text`
  text-align: left;
  width: 90%;
  margin-left: 15px;
  margin-top: 18px;
`;

export const BoxSelect = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.grayMedium};
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;
export const BoxSelected1 = styled.TouchableOpacity`
  width: 34%;
  height: 60px;
  border-right-width: 1px;
  border-color: white;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isSelected &&
    css`
      border-bottom-width: 4px;
      border-bottom-color: ${props => props.theme.colors.error};
    `}
`;
export const BoxSelected2 = styled.TouchableOpacity`
  width: 34%;
  height: 60px;
  border-right-width: 2px;
  border-color: white;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isSelected &&
    css`
      border-bottom-width: 4px;
      border-bottom-color: ${props => props.theme.colors.error};
    `}
`;
export const BoxSelected3 = styled.TouchableOpacity`
  width: 34%;
  height: 60px;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isSelected &&
    css`
      border-bottom-width: 4px;
      border-bottom-color: ${props => props.theme.colors.error};
    `}
`;

export const BoxContent = styled.View`
  width: 100%;
  gap: 20px;
  margin-top: 40px;
`;

export const Flat = styled.FlatList``;

export const Touch1 = styled.Pressable``;

export const Img = styled.Image`
  object-fit: contain;
  height: 150px;
  width: 50%;
`;
export const capas = styled.Image`
  object-fit: contain;
  height: 150px;
  width: 50%;
`;

export const BoxElenco = styled.View`
  flex-direction: row;
`;
export const BoxMore = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const BoxNameTitle = styled.Text`
  width: 38%;
`;
