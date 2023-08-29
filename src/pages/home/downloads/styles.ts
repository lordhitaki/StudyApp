import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  top: ${props => props.theme.spacings.xxlarge};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Touch = styled.TouchableOpacity``;

export const Box = styled.View`
  width: 95%;
  background-color: rgba(217, 217, 217, 0.1);
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

export const PicProfile = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  right: 15px;
`;

export const BoxSelect = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.dark};
  width: 100%;
  height: 60px;
  margin-top: 65px;
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

export const BoxCarroseul = styled.View`
  width: 90%;
  margin-top: ${props => props.theme.spacings.xlarge};
  align-items: center;
`;

export const Touch1 = styled.Pressable``;

export const Img = styled.Image`
  height: 150px;
  width: 130px;
`;
export const Img1 = styled.Image`
  object-fit: contain;
  height: 180px;
  width: 150px;
`;

export const BoxTitle = styled.View`
  width: 90%;
  margin-left: ${props => props.theme.spacings.large};
  margin-top: ${props => props.theme.spacings.xlarge};
`;

export const Flat = styled.FlatList``;

export const BoxDesc = styled.View`
  width: 80%;
  margin-top: 20px;
`;

export const BoxDelete = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
