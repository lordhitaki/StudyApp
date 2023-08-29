import React, {useContext, useEffect} from 'react';
import * as Styled from './style';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import TabRoute from '../../routes/tabBar';

export default function Screen() {
  const navigation = useNavigation();

  useEffect(() => {}, [navigation.isFocused()]);

  const getMovies = async () => {
    try {
      const response = await api.get(
        `/movies/${id}?populate=*,capas,trailler`,
        {
          params: {
            populate: ['elencos.image, movies.capas'],
          },
        },
      );
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useFocusEffect(() => {});
  return (
    <Styled.Container>
      <TabRoute />
    </Styled.Container>
  );
}
