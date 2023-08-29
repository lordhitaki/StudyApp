import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import HeaderLogo from '../../../components/headerLogo';

import * as Styled from './styles';
import {Title} from '../../../components/title';
import api from '../../../services/api';

export default function Home() {
  const [movies, setMovies] = useState();
  const [all, setAll] = useState();
  const [high, setHigh] = useState();
  const [series, setSeries] = useState();
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getMoviesAndSeries();
    }, []),
  );

  const getMoviesAndSeries = async () => {
    try {
      const moviesResponse = await api.get(
        '/movies?populate=*,capas,trailler,categories',
        {
          params: {
            populate: ['elencos.image, movies.capas'],
          },
        },
      );
      const seriesResponse = await api.get(
        '/series?populate=*,capas,trailler,categories',
        {
          params: {
            populate: ['elencos.image, movies.capas'],
          },
        },
      );

      const allMovies = moviesResponse.data.data;
      const allSeries = seriesResponse.data.data;
      setSeries(allSeries);
      const filmes = allMovies.filter(movie => {
        return movie.attributes.categories.data.some(
          category => category.attributes.categories === 'Novos',
        );
      });
      setMovies(filmes);
      const altaF = allMovies.filter(movie => {
        return movie.attributes.categories.data.some(
          category => category.attributes.categories === 'high',
        );
      });
      const altaS = allSeries.filter(movie => {
        return movie.attributes.categories.data.some(
          category => category.attributes.categories === 'high',
        );
      });
      const combinedAltas = [...altaF, ...altaS];
      setHigh(combinedAltas);

      const combinedAll = [...allMovies, ...allSeries];
      setAll(combinedAll);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const renderMovies = ({item}) => {
    return (
      <>
        <Styled.BoxCarro>
          <Styled.Touch1
            onPress={() =>
              navigation.navigate('Details', {
                item: item.id,
                tipos: item.attributes.tipo,
              })
            }>
            <Styled.Img
              source={{
                uri: `http://192.168.1.107:1337${item.attributes.capas.data[1].attributes.url}`,
              }}
            />
          </Styled.Touch1>
        </Styled.BoxCarro>
      </>
    );
  };
  const renderSeries = ({item}) => {
    return (
      <Styled.BoxCarro>
        <Styled.Touch1
          onPress={() =>
            navigation.navigate('Details', {
              item: item.id,
              tipos: item.attributes.tipo,
            })
          }>
          <Styled.Img
            source={{
              uri: `http://192.168.1.107:1337${item.attributes.capas.data[1].attributes.url}`,
            }}
          />
        </Styled.Touch1>
      </Styled.BoxCarro>
    );
  };
  const trendigDay = ({item}) => {
    return (
      <Styled.BoxCarro>
        <Styled.Touch1
          onPress={() =>
            navigation.navigate('Details', {
              item: item.id,
              tipos: item.attributes.tipo,
            })
          }>
          <Styled.Img
            source={{
              uri: `http://192.168.1.107:1337${item.attributes.capas.data[0].attributes.url}`,
            }}
          />
        </Styled.Touch1>
      </Styled.BoxCarro>
    );
  };
  const renderAllMovies = ({item}) => {
    return (
      <Styled.BoxCarroseul>
        <Styled.Touch1
          onPress={() =>
            navigation.navigate('Details', {
              name: item.attributes.name,
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
    );
  };

  return (
    <Styled.Container>
      <Styled.Scroll>
        <HeaderLogo />
        <Styled.Body>
          <Styled.BoxText>
            <Title
              text="Ultimos Filmes"
              color="white"
              size="xlarge"
              marginTop="xnano"
            />
          </Styled.BoxText>
          <Carousel
            data={movies}
            renderItem={renderMovies}
            sliderWidth={400}
            itemWidth={320}
          />
          <Styled.BoxText>
            <Title text="Ultimas Series" color="white" size="xlarge" />
          </Styled.BoxText>
          <Carousel
            data={series}
            renderItem={renderSeries}
            sliderWidth={400}
            itemWidth={320}
          />
          <Styled.BoxText>
            <Title text="Em alta" color="white" size="xlarge" />
          </Styled.BoxText>
          <Carousel
            data={high}
            renderItem={trendigDay}
            sliderWidth={400}
            itemWidth={150}
          />
          <Styled.BoxText>
            <Title text="Todos Filmes e Series" color="white" size="xlarge" />
          </Styled.BoxText>
          <Styled.Flat
            data={all}
            keyExtractor={item => item.id}
            renderItem={renderAllMovies}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              padding: 10,
              gap: 30,
            }}
          />
        </Styled.Body>
      </Styled.Scroll>
    </Styled.Container>
  );
}
