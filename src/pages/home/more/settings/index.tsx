/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import Header from '../../../../components/header';
import {Title} from '../../../../components/title';

export default function Settings() {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);

  return (
    <Styled.Container>
      <Styled.Scroll>
        <Header title="Configurações" />
        <Styled.Body>
          <Title text="Configurações gerais" color="dimGray" />
          <Styled.BoxSwitch>
            <Title text="Autoplay" color="white" size="medium" />
            <Styled.TrocarTheme
              trackColor={{false: '#fff', true: '#fff'}}
              thumbColor={'red'}
              ios_backgroundColor="#3e3e3e"
            />
          </Styled.BoxSwitch>
          <Styled.BoxSwitch2>
            <Title text="Notificações" color="white" size="medium" />
            <Styled.TrocarTheme
              trackColor={{false: '#fff', true: '#fff'}}
              thumbColor={'red'}
              ios_backgroundColor="#3e3e3e"
            />
          </Styled.BoxSwitch2>
          <Title
            text="Preferencias de Downloads"
            color="dimGray"
            marginTop="large"
          />
          <Styled.BoxSwitch>
            <Title
              text="Exclusão automática após a conclusão"
              color="white"
              size="medium"
            />
            <Styled.TrocarTheme
              trackColor={{false: '#fff', true: '#fff'}}
              thumbColor={'red'}
              ios_backgroundColor="#3e3e3e"
            />
          </Styled.BoxSwitch>
          <Styled.BoxSwitch>
            <Title
              text="Download apenas com Wi-Fi"
              color="white"
              size="medium"
            />
            <Styled.TrocarTheme
              trackColor={{false: '#fff', true: '#fff'}}
              thumbColor={'red'}
              ios_backgroundColor="#3e3e3e"
            />
          </Styled.BoxSwitch>
          <Styled.BoxSwitch2>
            <Styled.Touch>
              <Title text="Deletar todos os downloads" color="dimGray" />
            </Styled.Touch>
          </Styled.BoxSwitch2>
          <Title
            text="Qualidade para download de videos"
            color="dimGray"
            marginTop="medium"
          />
          <Styled.BoxSwitch>
            <Styled.BoxCheck>
              <Title text="Alta definição" color="white" size="medium" />
              <Title text="Usa mais dados" color="dimGray" size="xxnano" />
            </Styled.BoxCheck>
            {check ? (
              <Styled.Check onPress={() => setCheck(!check)}>
                <Styled.Icone name="check" size={20} />
              </Styled.Check>
            ) : (
              <Styled.Check2 onPress={() => setCheck(!check)} />
            )}
          </Styled.BoxSwitch>
          <Styled.BoxSwitch2>
            <Styled.BoxCheck>
              <Title text="Definição padrão" color="white" size="medium" />
              <Title text="Usa menos dados" color="dimGray" size="xxnano" />
            </Styled.BoxCheck>
            {check ? (
              <Styled.Check onPress={() => setCheck(!check)}>
                <Styled.Icone name="check" size={20} />
              </Styled.Check>
            ) : (
              <Styled.Check2 onPress={() => setCheck(!check)} />
            )}
          </Styled.BoxSwitch2>
          <Title
            text="Armazenamento do aparelho"
            color="white"
            size="medium"
            marginTop="medium"
          />
          <Styled.BoxStorage />
          <Styled.BoxInfos>
            <Styled.BoxMobileInfo>
              <Styled.Used />
              <Title
                text="Used"
                color="white"
                size="xxnano"
                family="extraBold"
              />
            </Styled.BoxMobileInfo>
            <Styled.BoxMobileInfo>
              <Styled.Marvel />
              <Title
                text="Marvel"
                color="white"
                size="xxnano"
                family="extraBold"
              />
            </Styled.BoxMobileInfo>
            <Styled.BoxMobileInfo>
              <Styled.Free />
              <Title
                text="Free"
                color="white"
                size="xxnano"
                family="extraBold"
              />
            </Styled.BoxMobileInfo>
          </Styled.BoxInfos>
        </Styled.Body>
      </Styled.Scroll>
    </Styled.Container>
  );
}
