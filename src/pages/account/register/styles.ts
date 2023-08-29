import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.dark};
  align-items: center;
  justify-content: center;
`;

export const BoxBody = styled.View`
  position: absolute;
  top: 60px;
  width: 100%;
  align-items: center;
`;

export const BoxForgot = styled.TouchableOpacity`
  width: 90%;
  align-items: flex-end;
  margin-top: ${props => props.theme.spacings.xxnano};
`;

export const BoxInput = styled.View`
  width: 100%;
  align-items: center;
`;

export const BoxButton = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
`;

export const BoxButtonSocial = styled.View`
  width: 90%;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BoxText = styled.View`
  margin-top: 30px;
  text-align: center;
  flex-direction: row;
`;

export const Touch = styled.TouchableOpacity``;

export const TouchPass = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  z-index: 1;
  right: 30px;
`;

export const BoxPass = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
