import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackScreenList';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WatchHeaderContainer, WatchHeaderContainerInner } from './styles';
import { IconImage } from '../../sharedStyles';
import { appFonts } from '../../theme';
import SearchIcon from '../../assets/icons/SearchIcon.png';

const WatchHeader = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSearchPressed = () => {
    navigation.navigate('SearchPage');
  };

  return (
    <WatchHeaderContainer>
      <WatchHeaderContainerInner>
        <Text style={appFonts.pageHeading}>Watch</Text>
        <TouchableOpacity onPress={onSearchPressed}>
          <IconImage source={SearchIcon} resizeMode="contain" />
        </TouchableOpacity>
      </WatchHeaderContainerInner>
    </WatchHeaderContainer>
  );
};

export default WatchHeader;
