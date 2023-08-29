import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MarvelLogo from '../../assets/logos/logoMarvel';
import * as Styled from './styles';

export default function SplashScreen() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      GetToken();
    }, []),
  );

  async function GetToken() {
    const token = await AsyncStorage.getItem('Token');
    if (token) {
      navigation.navigate('Screen');
    } else {
      GetOnboard();
    }
  }

  async function GetOnboard() {
    const onboard = await AsyncStorage.getItem('onBoarding');
    if (onboard) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Index');
    }
  }

  return (
    <Styled.Container>
      <MarvelLogo />
      <ActivityIndicator size="large" color="#FFFFFF" />
    </Styled.Container>
  );
}
