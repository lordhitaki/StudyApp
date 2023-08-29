import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Back = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const BoxNext = styled.View`
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 48px;
  right: 15px;
  bottom: 150px;
`;
export const BoxNext2 = styled.View`
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 48px;
  right: 15px;
  bottom: 150px;
  background-color: ${props => props.theme.colors.error};
`;

export const TextButtonNext = styled.Text`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.white};
`;

export const BoxText = styled.Text`
  margin-top: 30px;
  width: 45%;
  text-align: center;
`;
