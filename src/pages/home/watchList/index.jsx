import React, {useContext, useEffect, useState} from 'react';
import * as Styled from './style';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Title} from '../../../components/title';

export default function WatchList() {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  useEffect(() => {
    getAsyncList();
  }, [list]);

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
  };

  const renderList = ({item}) => {
    return (
      <Styled.BoxCarroseul>
        <Styled.Touch1
          onPress={() => navigation.navigate('Details', {item: item.id})}>
          <Styled.Img
            source={{
              uri: `http://192.168.1.107:1337${item.attributes.capas.data[0].attributes.url}`,
            }}
          />
        </Styled.Touch1>
      </Styled.BoxCarroseul>
    );
  };

  return (
    <Styled.Container>
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
        columnWrapperStyle={{justifyContent: 'space-around', gap: 20}}
      />
    </Styled.Container>
  );
}
