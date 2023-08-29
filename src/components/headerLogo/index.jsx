import React, {useState} from 'react';
import * as Styled from './style';

import MiniLogo from '../../assets/logos/miniLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import {useFocusEffect} from '@react-navigation/native';

export default function HeaderLogo() {
  const [user, setUser] = useState(null);

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
      <Styled.Header>
        <MiniLogo />
        <Styled.PicProfile
          source={{uri: `http://192.168.1.107:1337${user?.picProfile[0].url}`}}
        />
      </Styled.Header>
    </Styled.Container>
  );
}
