import type { RootStackParamList } from '../../navigation/StackScreenList';
import { useNavigation, type RouteProp } from '@react-navigation/native';

import React, { useCallback } from 'react';
import { StatusBar, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { BackWithText } from '../../sharedStyles';

export default function VideoPlayer({
  route,
}: {
  route: RouteProp<RootStackParamList, 'VideoPlayer'>;
}) {
  const navigation = useNavigation();
  const { video } = route.params;

  const onStateChange = useCallback(
    (state: string) => {
      if (state === 'ended') {
        navigation.goBack();
      }
    },
    [navigation]
  );

  return (
    <View style={{ transform: [{ rotate: '90deg' }] }}>
      <StatusBar hidden={true} />
      <BackWithText
        onPress={() => navigation.goBack()}
        text={'back'}
        absolute={true}
      />
      <YoutubePlayer
        height={responsiveScreenWidth(100)}
        width={responsiveScreenHeight(100)}
        play={true}
        videoId={video?.key}
        onChangeState={onStateChange}
        webViewProps={{
          injectedJavaScript: `
          var element = document.getElementsByClassName('container')[0];
          element.style.position = 'unset';
          element.style.paddingBottom = 'unset';
          true;
          `,
        }}
      />
    </View>
  );
}
