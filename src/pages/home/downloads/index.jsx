import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {Title} from '../../../components/title';
import {useDownloadContext} from '../../../theme/theme';
import api from '../../../services/api';
import MiniLogo from '../../../assets/logos/miniLogo';
import * as Styled from './styles';
import Delete from '../../../assets/icons/delete';
import HeaderLogo from '../../../components/headerLogo';

export default function Downloads() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [selectedButton, setSelectedButton] = useState('Download');
  const [list, setList] = useState([]);
  const {downloadProgress, selectedMovie, downloadedMovies} =
    useDownloadContext();

  useFocusEffect(
    React.useCallback(() => {
      getUser();
      getAsyncList();
    }, []),
  );

  const getAsyncList = async () => {
    try {
      const listString = await AsyncStorage.getItem('axop');
      if (listString) {
        const listAsyn = JSON.parse(listString);
        setList(listAsyn);
      }
    } catch (error) {
      console.log(error);
    }
    getUser();
  };

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

  const renderList = ({item}) => (
    <>
      <Styled.BoxCarroseul>
        <Styled.Touch1
          onPress={() =>
            navigation.navigate('Details', {
              item: item.id,
              tipos: item.attributes.tipo,
            })
          }>
          <Styled.Img1
            source={{
              uri: `http://192.168.1.107:1337${item.attributes.capas.data[0].attributes.url}`,
            }}
          />
        </Styled.Touch1>
      </Styled.BoxCarroseul>
    </>
  );

  const renderContent = () => {
    switch (selectedButton) {
      case 'Download':
        return (
          <>
            {downloadedMovies?.map((item, index) => (
              <Styled.Box key={index}>
                <Styled.Img
                  source={{
                    uri: `http://192.168.1.107:1337${item.movie?.attributes.capas.data[1].attributes.url}`,
                  }}
                />
                <Styled.BoxDesc>
                  <Title
                    text={`Filme: ${item.movie.attributes.name}`}
                    color="white"
                    size="xxnano"
                    family="bold"
                  />
                  <Title
                    text={` ${item.progress}% Baixou`}
                    color="white"
                    marginTop="nano"
                    size="xxnano"
                  />
                </Styled.BoxDesc>
                <Styled.BoxDelete>
                  <Delete />
                </Styled.BoxDelete>
              </Styled.Box>
            ))}
          </>
        );
      case 'Lista':
        return (
          <>
            <Styled.BoxTitle>
              <Title text="Minha Lista" color="white" size="xlarge" />
              <Title
                text="Sua lista de filmes salvos"
                color="white"
                size="medium"
                marginTop="medium"
              />
            </Styled.BoxTitle>
            <Styled.Flat
              data={list}
              keyExtractor={item => item.attributes.name}
              renderItem={renderList}
              numColumns={3}
              columnWrapperStyle={{justifyContent: 'space-around'}}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Styled.Container>
      <HeaderLogo />
      <Styled.BoxSelect>
        <Styled.BoxSelected1
          isSelected={selectedButton === 'Download'}
          onPress={() => setSelectedButton('Download')}>
          <Title
            text="Download"
            color="white"
            size="medium"
            family="extraBold"
          />
        </Styled.BoxSelected1>
        <Styled.BoxSelected2
          isSelected={selectedButton === 'Lista'}
          onPress={() => setSelectedButton('Lista')}>
          <Title text="Lista" color="white" size="medium" family="extraBold" />
        </Styled.BoxSelected2>
      </Styled.BoxSelect>
      {renderContent()}
    </Styled.Container>
  );
}
