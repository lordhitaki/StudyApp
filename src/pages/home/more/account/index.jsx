import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Styled from './styles';
import Header from '../../../../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../../services/api';
import {Title} from '../../../../components/title';
import Plus from '../../../../assets/icons/plus';

export default function Account() {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  const [selecteduser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const response = await api.get(`/users/${storedUser}?populate=*`);
        setUser(response.data.profiles);
      }
    } catch (error) {
      console.log('Error:', error.response.data);
    }
  };

  const renderAllMovies = ({item}) => {
    return (
      <Styled.Touch onPress={() => setSelectedUser(item)}>
        <Styled.SelectPicProfile
          source={{uri: `http://192.168.1.105:1337${item.profilePic}`}}
        />
        <Title
          text={item.name}
          color="white"
          size="medium"
          family="bold"
          align="center"
          marginTop="xxnano"
        />
      </Styled.Touch>
    );
  };

  return (
    <Styled.Container>
      <Header title="Conta" />
      <Styled.Body>
        <Title
          text="Quem vai assistir?"
          color="white"
          size="large"
          family="extraBold"
          marginBottom="medium"
        />
        <Styled.Borde>
          <Styled.PicProfile
            source={{
              uri: `http://192.168.1.105:1337${selecteduser?.profilePic}`,
            }}
          />
        </Styled.Borde>
        <Title
          text={selecteduser?.name}
          color="white"
          size="medium"
          family="bold"
          marginBottom="huge"
        />
        <Styled.BoxProfiles>
          <Styled.Flat
            data={user}
            keyExtractor={item => item.id.toString()}
            renderItem={renderAllMovies}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-around', gap: 20}}
          />
        </Styled.BoxProfiles>
        <Styled.Touch onPress={() => navigation.navigate('ProfilePic')}>
          <Styled.BoxPlus>
            <Plus />
          </Styled.BoxPlus>
          <Title
            text="Criar novo pefil"
            color="white"
            size="small"
            family="extraBold"
            marginTop="small"
          />
        </Styled.Touch>
      </Styled.Body>
    </Styled.Container>
  );
}
