import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
import {Title} from '../../../components/title';
import Button from '../../../components/button';

export default function More() {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getAsyncList();
  }, []);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('axop');
      alert('usuario deslogado');
      navigation.navigate('SplashScreen');
    } catch (error) {
      console.log('Erro ao limpar o AsyncStorage:', error);
    }
  };

  const getAsyncList = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      try {
        const response = await api.get(`/users/${user}?populate=*`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PicProfile
        source={{uri: `http://192.168.1.107:1337${user?.picProfile[0].url}`}}
      />
      <Title
        text={user?.username}
        color="white"
        size="large"
        family="extraBold"
      />
      <Styled.Body>
        <Styled.Touch onPress={() => navigation.navigate('Account')}>
          <Title text="Conta" color="white" size="medium" />
          <Styled.Right />
        </Styled.Touch>
        <Styled.Touch onPress={() => navigation.navigate('Settings')}>
          <Title text="Configurações" color="white" size="medium" />
          <Styled.Right />
        </Styled.Touch>
        <Styled.Touch>
          <Title text="Termos" color="white" size="medium" />
          <Styled.Right />
        </Styled.Touch>
        <Styled.Touch onPress={() => navigation.navigate('Privacity')}>
          <Title
            text="Configurações de privacidade"
            color="white"
            size="medium"
          />
          <Styled.Right />
        </Styled.Touch>
        <Styled.Touch onPress={() => navigation.navigate('ParentalControl')}>
          <Title text="Controle dos pais" color="white" size="medium" />
          <Styled.Right />
        </Styled.Touch>
        <Styled.Loggout>
          <Styled.Touch onPress={() => setModalVisible(true)}>
            <Title text="Deslogar" color="white" size="medium" />
          </Styled.Touch>
        </Styled.Loggout>
      </Styled.Body>
      {modalVisible ? (
        <>
          <Styled.Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <Styled.ModalView>
              <Title
                text="Você realmente deseja se desconectar?"
                color="white"
                size="xxnano"
              />
              <Styled.BoxModal>
                <Button
                  text="Sim"
                  size={40}
                  colorButton="error"
                  onPress={() => clearAsyncStorage()}
                />
                <Button
                  text="Cancelar"
                  size={40}
                  onPress={() => setModalVisible(false)}
                />
              </Styled.BoxModal>
            </Styled.ModalView>
          </Styled.Modal>
        </>
      ) : null}
    </Styled.Container>
  );
}
