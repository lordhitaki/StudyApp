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

export default function AgeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [pic, setPic] = useState(route.params.pic);
  const [users, setUsers] = useState(route.params.user);

  const signUpSchema = yup.object({
    age: yup
      .string()
      .required('Preencha este campo')
      .matches(/^\d{1,2}$/, 'Permita no máximo 3 dígitos numéricos'),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      age: '',
    },
  });
  const age = watch('age');

  return (
    <Styled.Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
          <Styled.BoxLogo>
            <LogoRed />
            <Title
              text="Qual sua idade?"
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
              text={users}
              color="white"
              family="extraBold"
              size="large"
              marginBottom="medium"
              marginLeft="xnano"
            />
            <InputForm
              placeholder="Digite sua idade"
              control={control}
              name={'age'}
              size="90%"
              color="white"
              background="#333333"
              placeholderTextColor={'#707070'}
            />
            {!isValid ? null : (
              <Styled.MnsgValid>
                <Title text="Idade valida" color="success" size="xxnano" />
              </Styled.MnsgValid>
            )}
            {isValid ? null : (
              <Styled.MnsgValid>
                <Title
                  text="Idade invalida"
                  color="error"
                  size="xxnano"
                  family="bold"
                />
              </Styled.MnsgValid>
            )}
          </Styled.Body>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Styled.BoxBt>
        <Button
          text="Continuar"
          disabled={!isValid}
          colorButton={!isValid ? 'transparent' : 'error'}
          onPress={() =>
            navigation.navigate('PasswordScreen', {
              pic: pic,
              user: users,
              idade: age,
            })
          }
        />
      </Styled.BoxBt>
    </Styled.Container>
  );
}
