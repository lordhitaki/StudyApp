import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './style';
import {Title} from '../title';
import Back from '../../assets/icons/back';

interface HeaderProps {
  title?: string;
}

export default function Header({title, ...rest}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.BoxSeta onPress={() => navigation.goBack()}>
          <Back />
        </Styled.BoxSeta>
        {title && (
          <Title text={title} size="large" color="white" family="extraBold" />
        )}
      </Styled.Header>
    </Styled.Container>
  );
}
