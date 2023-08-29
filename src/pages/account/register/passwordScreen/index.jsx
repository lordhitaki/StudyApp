import React, {useEffect, useState} from 'react';
import * as Styled from './style';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import LogoRed from '../../../../assets/logos/logoRed';
import {Title} from '../../../../components/title';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../../../components/button';
import InputForm from '../../../../components/form/input/form';
import api from '../../../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PasswordScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [pic, setPic] = useState(route.params.pic);
  const [username, setUsername] = useState(route.params.user);
  const [age, setAge] = useState(route.params.idade);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState();
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
        setId(response.data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const signUpSchema = yup.object().shape({
    password: yup
      .string()
      .matches(
        /^[a-zA-Z0-9.,_\/&]*$/,
        'Senha inválida: use apenas letras, números e .,_/&',
      )
      .required('Campo obrigatório'),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      password: '',
    },
  });
  const password = watch('password');

  const getUsers = async () => {
    try {
      const form = {
        data: {
          name: username,
          age: age,
          password: password,
          relation: id.id,
          profilePic: pic,
        },
      };
      const response = await api.post(`/profiles`, form);
    } catch (error) {
      console.error(error.response.data.error.details);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Styled.Container>
        <Styled.BoxLogo>
          <LogoRed />
          <Title
            text="Digite sua senha"
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
              <Title text="Trocar" color="error" />
            </Styled.Touch>
          </Styled.BoxPic>
          <Title
            text={username}
            color="white"
            family="extraBold"
            size="large"
            marginBottom="medium"
            marginLeft="xnano"
          />
          <InputForm
            placeholder="Crie sua senha"
            control={control}
            name={'password'}
            size="90%"
            color="white"
            background="#333333"
            placeholderTextColor={'#707070'}
            secureTextEntry
          />
          <Styled.MnsgValid>
            <Title
              text="Minimo 8 caracteres"
              color={!isValid ? 'dimGray' : 'success'}
              size="xxnano"
            />
            <Title
              text="Apenas de A-Z, a-z, 0-9"
              color="dimGray"
              size="xxnano"
            />
            <Title text="1 caractere especial" color="dimGray" size="xxnano" />
          </Styled.MnsgValid>
        </Styled.Body>
        <Styled.BoxBt>
          <Button
            text={!isValid ? 'Ainda não esta boa' : 'Parece forte'}
            disabled={!isValid}
            colorButton={!isValid ? 'transparent' : 'error'}
            onPress={handleSubmit(getUsers)}
          />
        </Styled.BoxBt>
      </Styled.Container>
    </TouchableWithoutFeedback>
  );
}
