import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ShadowView from 'react-native-shadow-view';

import * as Styled from './style';
import LogoRed from '../../../../assets/logos/logoRed';
import {Title} from '../../../../components/title';
import Button from '../../../../components/button';
import api from '../../../../services/api';

export default function ProfilePic() {
  const navigation = useNavigation();
  const [pic, setPic] = useState();
  const [selectedButton, setSelectedButton] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await api.get(`/profile-pics?populate=*`);
      setPic(response.data.data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const renderList = ({item}) => {
    let pict = item.attributes.picProfile.data[0].attributes.url;
    return (
      <Styled.BoxList>
        <Styled.Touch
          isSelected={selectedButton === pict}
          onPress={() => {
            setSelectedButton(pict);
            setIsButtonEnabled(true);
          }}>
          <Styled.Img
            source={{
              uri: `http://192.168.1.107:1337${pict}`,
            }}
          />
        </Styled.Touch>
      </Styled.BoxList>
    );
  };

  return (
    <Styled.Container>
      <Styled.BoxLogo>
        <LogoRed />
        <Title
          text="Escolha seu Avatar"
          color="white"
          size="large"
          family="extraBold"
          marginTop="medium"
        />
      </Styled.BoxLogo>
      <Styled.Body>
        <Styled.Flat
          data={pic}
          keyExtractor={item =>
            item.attributes.picProfile.data[0].attributes.url
          }
          renderItem={renderList}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around', padding: 20}}
        />
      </Styled.Body>
      <Styled.BoxBt>
        <Button
          text="Este é bom!"
          disabled={!isButtonEnabled}
          colorButton={isButtonEnabled ? 'error' : 'transparent'}
          onPress={() =>
            navigation.navigate('UsernameScreen', {item: selectedButton})
          }
        />
      </Styled.BoxBt>
    </Styled.Container>
  );
}
