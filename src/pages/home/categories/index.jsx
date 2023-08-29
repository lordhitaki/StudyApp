import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import {Title} from '../../../components/title';
import api from '../../../services/api';
import Categ from '../../../components/catego';

export default function Categories() {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState('Filmes');
  const [movies, setMovies] = useState();
  const [series, setSeries] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getMovies();
    getSeries();
  }, [selectedCategory]);

  const getMovies = async () => {
    try {
      let url = `/movies?populate=*,capas,trailler`;

      if (selectedCategory == null && selectedCategory !== undefined) {
        url;
      } else {
        url += `&filters[categories][categories][$contains]=${selectedCategory}`;
      }

      const response = await api.get(url, {
        params: {
          populate: ['elencos.image, movies.capas'],
        },
      });

      setMovies(response.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  const getSeries = async () => {
    try {
      let url = `/series?populate=*,capas,trailler`;

      if (selectedCategory == null && selectedCategory !== undefined) {
        url;
      } else {
        url += `&filters[categories][categories][$contains]=${selectedCategory}`;
      }

      const response = await api.get(url, {
        params: {
          populate: ['elencos.image, series.capas'],
        },
      });

      setSeries(response.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'Filmes':
        return (
          <Styled.Flat
            data={movies}
            keyExtractor={item => item.attributes.name}
            renderItem={renderAllMovies}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-around', gap: 20}}
          />
        );
      case 'Series':
        return (
          <Styled.Flat
            data={series}
            keyExtractor={item => item.attributes.name}
            renderItem={renderAllSeries}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-around', gap: 20}}
          />
        );
      case 'Mais':

      default:
        return null;
    }
  };
  const renderAllMovies = ({item}) => {
    return (
      <Styled.BoxCarroseul>
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
      </Styled.BoxCarroseul>
    );
  };
  const renderAllSeries = ({item}) => {
    return (
      <Styled.BoxCarroseul>
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
      </Styled.BoxCarroseul>
    );
  };

  return (
    <Styled.Container>
      <Styled.BoxSelect>
        <Styled.BoxSelected1
          isSelected={selectedButton === 'Filmes'}
          onPress={() => setSelectedButton('Filmes')}>
          <Title text="Filmes" color="white" size="medium" family="extraBold" />
        </Styled.BoxSelected1>
        <Styled.BoxSelected2
          isSelected={selectedButton === 'Series'}
          onPress={() => setSelectedButton('Series')}>
          <Title text="Series" color="white" size="medium" family="extraBold" />
        </Styled.BoxSelected2>
      </Styled.BoxSelect>
      <Styled.BoxCateg>
        <Categ onCategorySelect={setSelectedCategory} />
      </Styled.BoxCateg>
      {renderContent()}
    </Styled.Container>
  );
}
