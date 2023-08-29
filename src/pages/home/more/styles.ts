import styled from 'styled-components/native';
import Sele from '../../../assets/icons/sele';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const PicProfile = styled.Image`
  width: 260px;
  height: 260px;
  object-fit: contain;
`;
export const Body = styled.View`
  width: 90%;
  justify-content: flex-start;
`;

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacings.xlarge};
`;

export const Right = styled(Sele)``;

export const Loggout = styled.View`
  width: 100%;
  justify-content: flex-start;
  border-top-width: 0.5px;
  border-color: ${props => props.theme.colors.grayDark};
  margin-top: ${props => props.theme.spacings.xlarge};
  margin-bottom: ${props => props.theme.spacings.xlarge};
`;

export const Modal = styled.Modal``;

export const ModalView = styled.View`
  position: absolute;
  bottom: 290px;
  width: 90%;
  padding: 35px;
  background-color: black;
  left: 20px;
  align-items: center;
`;

export const BoxModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;
