import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const Body = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

export const PicProfile = styled.Image`
  width: 170px;
  height: 170px;
`;
export const SelectPicProfile = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Borde = styled.View`
  border-width: 4px;
  border-color: red;
  border-radius: 100px;
  margin-bottom: 10px;
`;

export const Flat = styled.FlatList``;

export const Touch = styled.TouchableOpacity``;

export const BoxProfiles = styled.View`
  width: 100%;
`;

export const BoxPlus = styled.View`
  background-color: ${props => props.theme.colors.grayMedium};
  border-radius: 80px;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
