/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {t} from 'i18next';

import LogoRed from '../../../assets/logos/logoRed';

import * as Styled from './styles';
import InputForm from '../../../components/form/input/form';
import Button from '../../../components/button';
import {Title} from '../../../components/title';
import ButtonSocial from '../../../components/button-social';
import IconGoogle from '../../../assets/icons/google';
import IconFacebook from '../../../assets/icons/facebook';
import api from '../../../services/api';

export default function Register() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const signUpSchema = yup.object({
    username: yup.string().required(t('Preencha este campo')),
    ID: yup
      .string()
      .email(t('Informe um E-mail válido'))
      .required(t('Digite seu E-mail')),
    Password: yup.string().required(t('Informe sua senha!')),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const user = watch('username');
  const email = watch('ID');
  const password = watch('Password');

  const onSubmit = async data => {
    try {
      const newUser = {
        username: user,
        email: email,
        password: password,
      };
      const response = await api.post('/auth/local/register', newUser);
      alert('Cadastro realizado com sucesso');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error.response.data.error.message);
      if (
        error.response.data.error.message ===
        'Email or Username are already taken'
      ) {
        alert('Email ja esta em uso');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <Styled.Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Styled.BoxBody>
          <LogoRed />
          <Styled.BoxInput>
            <InputForm
              control={control}
              name={'username'}
              placeholder="nome de usuário "
              size="90%"
            />
            <InputForm
              control={control}
              name={'ID'}
              placeholder="Digite seu e-mail"
              size="90%"
            />
            <Styled.BoxPass>
              <Styled.TouchPass onPress={togglePasswordVisibility}>
                <Title
                  text={passwordVisible ? 'Hide' : 'Show'}
                  color="dimGray"
                  family="bold"
                />
              </Styled.TouchPass>
              <InputForm
                control={control}
                name={'Password'}
                placeholder="Senha"
                size="90%"
                secureTextEntry={!passwordVisible}
              />
            </Styled.BoxPass>
          </Styled.BoxInput>
          <Styled.BoxButton>
            <Button
              size={90}
              colorButton={isValid ? 'error' : 'transparent'}
              color="white"
              text="Inscrever-se"
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid}
            />
          </Styled.BoxButton>
          <Styled.BoxForgot>
            <Styled.Touch>
              <Title text="Esqueceu sua senha?" color="white" family="bold" />
            </Styled.Touch>
          </Styled.BoxForgot>
          <Title text="ou" color="white" marginTop="huge" family="bold" />

          <Title
            text="Continue com"
            color="white"
            marginTop="large"
            size="medium"
            family="extraBold"
          />
          <Styled.BoxButtonSocial>
            <ButtonSocial>
              <IconFacebook />
              <Title text="Facebook" size="xsmall" family="bold" />
            </ButtonSocial>
            <ButtonSocial>
              <IconGoogle />
              <Title text="Google" size="xsmall" family="bold" />
            </ButtonSocial>
          </Styled.BoxButtonSocial>
          <Styled.BoxText>
            <Title
              text="Já tem uma conta? "
              color="dimGray"
              size="medium"
              family="extraBold"
            />
            <Styled.Touch onPress={() => navigation.navigate('Login')}>
              <Title
                text=" Conecte-se "
                color="error"
                size="medium"
                family="extraBold"
              />
            </Styled.Touch>
          </Styled.BoxText>
        </Styled.BoxBody>
      </TouchableWithoutFeedback>
    </Styled.Container>
  );
}
