/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import {t} from 'i18next';
import LogoRed from '../../assets/logos/logoRed';
import {Title} from '../../components/title';
import Button from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const navigation = useNavigation();

  async function SetOnboard() {
    await AsyncStorage.setItem('onBoarding', 'true');
  }

  const slides = [
    {
      key: '1',
      text: t(
        'Todos os seus filmes e séries favoritos da MARVEL em um só lugar',
      ),
      image: require('../../assets/backgrounds/cartas.png'),
    },
    {
      key: '2',
      text: t('Assistir online ou baixe e veja offline'),
      image: require('../../assets/backgrounds/dp2.png'),
    },
    {
      key: '3',
      text: t(
        'Crie perfis para diferentes membros e obtenha recomendações personalizadas',
      ),
      image: require('../../assets/backgrounds/ds.png'),
    },
    {
      key: '4',
      text: t('Planos de acordo com as suas necessidades a preços acessíveis'),
      image: require('../../assets/backgrounds/im.png'),
    },
    {
      key: '5',
      text: t('Vamos começar !!!'),
      image: require('../../assets/backgrounds/thor.png'),
    },
    {
      key: '6',
      image: require('../../assets/backgrounds/ca.png'),
    },
  ];

  function renderSlides({item}) {
    return (
      <Styled.Container>
        <StatusBar translucent backgroundColor={'transparent'} />
        <Styled.Back source={item.image}>
          <LogoRed />
          <Styled.BoxText>
            <Title
              text={item.text}
              color="white"
              marginTop="medium"
              family="bold"
            />
          </Styled.BoxText>
        </Styled.Back>
      </Styled.Container>
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: 'red',
        width: 10,
        marginBottom: 100,
      }}
      dotStyle={{
        backgroundColor: '#D0D8ED',
        marginBottom: 100,
      }}
      renderNextButton={() => (
        <Styled.BoxNext2>
          <Styled.TextButtonNext> Continuar</Styled.TextButtonNext>
        </Styled.BoxNext2>
      )}
      renderDoneButton={() => (
        <Styled.BoxNext>
          <Button
            size={100}
            colorButton="error"
            color="white"
            text="Inscrever-se"
            onPress={async () => {
              await SetOnboard();
              navigation.navigate('Register');
            }}
            border="error"
          />
          <Button
            size={100}
            colorButton="transparent"
            color="white"
            text="Conecte-se"
            onPress={async () => {
              await SetOnboard();
              navigation.navigate('Login');
            }}
          />
        </Styled.BoxNext>
      )}
    />
  );
}
