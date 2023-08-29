import React, {useState} from 'react';
import * as Styled from './style';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import LogoRed from '../../../../assets/logos/logoRed';
import {Title} from '../../../../components/title';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../../services/api';
import Button from '../../../../components/button';

export default function SuccessScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getUser();
    }, []),
  );

  const getUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser) {
        const response = await api.get(`/users/${storedUser}?populate=*`);

        setUser(response.data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Styled.Container>
      <LogoRed />
      <Title
        text="Seu perfil foi criado com sucesso!!"
        color="white"
        size="medium"
        marginTop="xlarge"
        family="extraBold"
      />
      <Styled.PicProfile
        source={{uri: `http://192.168.1.107:1337${user?.picProfile[0].url}`}}
      />
      <Title
        text={user?.username}
        color="white"
        size="large"
        marginTop="xxlarge"
        family="extraBold"
      />
      <Styled.BoxBt>
        <Button
          text="Continuar"
          colorButton="error"
          onPress={() => navigation.navigate('Screen')}
        />
      </Styled.BoxBt>
    </Styled.Container>
  );
}
