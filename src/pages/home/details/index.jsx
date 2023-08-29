import React, {useState} from 'react';
import {
  useNavigation,
  useFocusEffect,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDownloadContext} from '../../../theme/theme';

import {Title} from '../../../components/title';
import Button from '../../../components/button';
import api from '../../../services/api';

import Back from '../../../assets/icons/back';
import Right from '../../../assets/icons/right';

import * as Styled from './style';

export default function Details() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute();
  const [id, setId] = useState(route.params.item);
  const [movies, setMovies] = useState();
  const [selectedButton, setSelectedButton] = useState('Trailer');
  const [video, setVideo] = useState();
  const [list, setlist] = useState([]);
  const [tipo, setTipo] = useState(route.params.tipos);
  const {startDownload} = useDownloadContext();

  useFocusEffect(
    React.useCallback(() => {
      getMovies();
      getList();
    }, [id]),
  );

  const handleDownloadClick = () => {
    startDownload(movies);
  };

  const getMovies = async () => {
    try {
      const response = await api.get(
        `/${tipo}/${id}?populate=*,capas,trailler`,
        {
          params: {
            populate: ['elencos.image, movies.capas'],
          },
        },
      );
      setMovies(response.data.data);
      setVideo(response.data.data.attributes.trailler.data[0].attributes.url);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const getList = async () => {
    try {
      const listString = await AsyncStorage.getItem('axop');
      if (listString) {
        const listSave = JSON.parse(listString);
        setlist(listSave);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addList = async filme => {
    try {
      const listAtualizados = [...list, filme];
      await AsyncStorage.setItem('axop', JSON.stringify(listAtualizados));
      setlist(listAtualizados);
    } catch (error) {
      console.log(error);
    }
  };

  const remFavorite = async filme => {
    try {
      const listAtualizados = list.filter(
        p => p.attributes.name !== filme.attributes.name,
      );
      await AsyncStorage.setItem('axop', JSON.stringify(listAtualizados));
      setlist(listAtualizados);
    } catch (error) {
      console.log(error);
    }
  };

  const addRemList = async filme => {
    const listExistente = list.find(
      p => p.attributes.name === filme.attributes.name,
    );
    if (listExistente) {
      remFavorite(filme);
    } else {
      addList(filme);
    }
  };

  const isFavorito = list.some(
    item => item.attributes.name === movies?.attributes.name,
  );

  const renderContent = () => {
    switch (selectedButton) {
      case 'Trailer':
        return (
          <Styled.BoxContent>
            <Video
              source={{
                uri: `http://192.168.1.107:1337${movies?.attributes.trailler.data[0].attributes.url}`,
              }}
              style={{width: '100%', height: 300}}
              controls={true}
              paused
            />
          </Styled.BoxContent>
        );
      case 'Elenco':
        return (
          <Styled.BoxContent>
            {movies.attributes.elencos?.data.map((item, index) => (
              <Styled.BoxElenco key={index}>
                <Styled.Img
                  source={{
                    uri: `http://192.168.1.107:1337${item.attributes.image.data[0].attributes.url}`,
                  }}
                />
                <Title
                  text={item.attributes.ator}
                  color="white"
                  size="medium"
                  family="extraBold"
                  marginTop="medium"
                />
              </Styled.BoxElenco>
            ))}
          </Styled.BoxContent>
        );
      case 'Mais':
        return (
          <Styled.BoxContent>
            {movies?.attributes.movies?.data.map((item, index) => (
              <Styled.Touch key={index} onPress={() => setId(item.id)}>
                <Styled.BoxMore>
                  <Styled.capas
                    source={{
                      uri: `http://192.168.1.107:1337${item.attributes.capas.data[1].attributes.url}`,
                    }}
                  />
                  <Styled.BoxNameTitle>
                    <Title
                      text={item.attributes.name}
                      color="white"
                      marginRight="medium"
                    />
                  </Styled.BoxNameTitle>
                </Styled.BoxMore>
              </Styled.Touch>
            ))}
          </Styled.BoxContent>
        );
      default:
        return null;
    }
  };

  return (
    <Styled.Container>
      <Styled.Scroll>
        <Styled.BoxBack>
          <Styled.Touch onPress={() => navigation.goBack()}>
            <Back />
          </Styled.Touch>
        </Styled.BoxBack>
        <Styled.Play>
          <Styled.ImgDetail
            source={{
              uri: `http://192.168.1.107:1337${movies?.attributes.capas.data[0].attributes.url}`,
            }}
          />
          <Styled.Play2>
            <Styled.Touch
              onPress={() => navigation.navigate('Player', {item: video})}>
              <Right />
            </Styled.Touch>
          </Styled.Play2>
        </Styled.Play>
        <Styled.BoxName>
          <Title
            text={movies?.attributes.name}
            marginTop="huge"
            family="bold"
            color="white"
            size="medium"
          />
        </Styled.BoxName>
        <Styled.BoxButton>
          <Button
            size={40}
            text="Download"
            colorButton="transparent"
            onPress={handleDownloadClick}
          />
          {isFavorito ? (
            <Button
              size={40}
              text="Tire de sua lista"
              colorButton="transparent"
              border="transparent"
              onPress={() => addRemList(movies)}
            />
          ) : (
            <Button
              size={40}
              text="+ Add a sua lista"
              colorButton="transparent"
              border="transparent"
              onPress={() => addRemList(movies)}
            />
          )}
        </Styled.BoxButton>
        <Styled.BoxSinopse>
          <Title
            text={movies?.attributes.Sinopse}
            color="white"
            family="bold"
            size="small"
          />
        </Styled.BoxSinopse>
        <Styled.BoxSelect>
          <Styled.BoxSelected1
            isSelected={selectedButton === 'Trailer'}
            onPress={() => setSelectedButton('Trailer')}>
            <Title
              text="Trailer"
              color="white"
              size="medium"
              family="extraBold"
            />
          </Styled.BoxSelected1>
          <Styled.BoxSelected2
            isSelected={selectedButton === 'Elenco'}
            onPress={() => setSelectedButton('Elenco')}>
            <Title
              text="Elenco"
              color="white"
              size="medium"
              family="extraBold"
            />
          </Styled.BoxSelected2>
          <Styled.BoxSelected3
            isSelected={selectedButton === 'Mais'}
            onPress={() => setSelectedButton('Mais')}>
            <Title text="Mais" color="white" size="medium" family="extraBold" />
          </Styled.BoxSelected3>
        </Styled.BoxSelect>
        {renderContent()}
      </Styled.Scroll>
    </Styled.Container>
  );
}
