import React, {useState} from 'react';
import * as Styled from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import Video from 'react-native-video';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Title} from '../../components/title';

export default function Player() {
  const navigation = useNavigation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const route = useRoute();
  const [video, setVideo] = useState(route.params.item);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Styled.Container>
      <Video
        source={{
          uri: `http://192.168.1.107:1337${video}`,
        }}
        resizeMode={isFullScreen ? 'cover' : 'contain'}
        style={{
          width: isFullScreen ? Dimensions.get('window').width : '100%',
          height: isFullScreen ? Dimensions.get('window').height : 300,
          flex: isFullScreen ? 1 : undefined,
        }}
        controls={true}
      />
      <TouchableOpacity
        style={{position: 'absolute', top: 10, right: 10}}
        onPress={toggleFullScreen}>
        <Title
          text={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
          color="white"
        />
      </TouchableOpacity>
    </Styled.Container>
  );
}
