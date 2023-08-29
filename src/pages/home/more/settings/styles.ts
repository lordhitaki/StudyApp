import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
`;

export const Scroll = styled.ScrollView``;

export const Body = styled.View`
  width: 90%;
  margin-left: 20px;
`;

export const TrocarTheme = styled.Switch``;

export const BoxSwitch = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
export const BoxSwitch2 = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom-width: 2px;
  border-color: gray;
  padding-bottom: 30px;
`;

export const Touch = styled.TouchableOpacity``;

export const Check = styled.TouchableOpacity`
  border-width: 2px;
  border-color: red;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: red;
`;
export const Check2 = styled.TouchableOpacity`
  border-width: 2px;
  border-color: red;
  width: 30px;
  height: 30px;
  border-radius: 10px;
`;

export const Icone = styled(Icon)`
  font-size: 25px;
  color: black;
`;

export const BoxCheck = styled.View``;

export const BoxStorage = styled.View`
  width: 100%;
  border-width: 2px;
  border-color: red;
  height: 30px;
  margin-top: 10px;
`;

export const BoxInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxMobileInfo = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

export const Used = styled.View`
  background-color: blue;
  width: 20px;
  height: 20px;
`;

export const Marvel = styled.View`
  background-color: red;
  width: 20px;
  height: 20px;
`;

export const Free = styled.View`
  background-color: white;
  width: 20px;
  height: 20px;
`;
