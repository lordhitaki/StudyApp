import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LogoRed from '../../../../assets/logos/logoRed';
import {Title} from '../../../../components/title';
import InputForm from '../../../../components/form/input/form';

import * as Styled from './style';
import Button from '../../../../components/button';
import api from '../../../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UsernameScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [pic, setPic] = useState(route.params.item);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const signUpSchema = yup.object({
    username: yup.string().required('Preencha este campo').min(3),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      username: '',
    },
  });
  const name = watch('username');

  const getUsers = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const response = await api.get(`/users/${storedUser}?populate=*`);
        setUsers(response.data.profiles);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const isUsernameTaken = users.some(user => user.name === name);

  return (
    <Styled.Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
          <Styled.BoxLogo>
            <LogoRed />
            <Title
              text="Digite o nome de usuario"
              color="white"
              size="large"
              family="extraBold"
              marginTop="medium"
            />
          </Styled.BoxLogo>
          <Styled.Body>
            <Styled.BoxPic>
              <Styled.ProfilePic
                source={{uri: `http://192.168.1.107:1337${pic}`}}
              />
              <Styled.Touch onPress={() => navigation.navigate('ProfilePic')}>
                <Title text="Change" color="error" />
              </Styled.Touch>
            </Styled.BoxPic>
            <InputForm
              placeholder="nome de usuário"
              control={control}
              name={'username'}
              size="90%"
              color="white"
              background="#333333"
              placeholderTextColor={'#707070'}
            />
            {!isValid || isUsernameTaken ? null : (
              <Styled.MnsgValid>
                <Title
                  text="Nome de usuário válido"
                  color="success"
                  size="xxnano"
                />
              </Styled.MnsgValid>
            )}
            {name.length >= 3 ||
              (!isValid && (
                <Styled.MnsgValid>
                  <Title
                    text="Nome de usuário inválido, necessário 3 caracteres"
                    color="error"
                    size="xxnano"
                  />
                </Styled.MnsgValid>
              ))}
            {!isUsernameTaken ? null : (
              <Styled.MnsgValid>
                <Title
                  text="Nome de usuário ja em uso"
                  color="error"
                  size="xxnano"
                />
              </Styled.MnsgValid>
            )}
          </Styled.Body>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxBt>
        <Button
          text="Este é bom!"
          disabled={!isValid || isUsernameTaken}
          colorButton={!isValid || isUsernameTaken ? 'transparent' : 'error'}
          onPress={() =>
            navigation.navigate('AgeScreen', {pic: pic, user: name})
          }
        />
      </Styled.BoxBt>
    </Styled.Container>
  );
}
