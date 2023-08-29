import React, {useEffect, useState} from 'react';

import {Title} from '../title';
import * as Styled from './styles';
import api from '../../services/api';

export default function Categ({onCategorySelect}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await api.get('/categories?populate=* ');

      setCategories(response.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const renderCategory = ({item}) => (
    <Styled.BtCateg
      isSelected={item.attributes.categories === selectedCategory}
      onPress={() => {
        if (item.attributes.categories === selectedCategory) {
          setSelectedCategory(null);
          onCategorySelect(null);
        } else {
          setSelectedCategory(item.attributes.categories);
          onCategorySelect(item.attributes.categories);
        }
      }}>
      <Title text={item.attributes.categories} color="white" />
    </Styled.BtCateg>
  );

  return (
    <Styled.Flat
      data={categories}
      keyExtractor={item => item.id.toString()}
      renderItem={renderCategory}
      horizontal
    />
  );
}
