import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  top: ${props => props.theme.spacings.xxlarge};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const BoxSeta = styled.TouchableOpacity`
  position: absolute;
  left: ${props => props.theme.spacings.xxnano};
`;

export const Container = styled.View`
  background-color: ${props => props.theme.colors.primary};
`;
