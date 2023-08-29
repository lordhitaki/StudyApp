import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BoxMoldura = styled.View`
  margin-left: 30px;
`;

export const PicProfile = styled.Image`
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  right: 15px;
`;

export const Header = styled.View`
  width: 100%;
  top: ${props => props.theme.spacings.xxlarge};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
