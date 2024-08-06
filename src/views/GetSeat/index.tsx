import type { NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackScreenList';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { GenericSafeArea } from '../../sharedStyles';
import Header from '../../components/Header';
import SeatingArea from '../../components/SeatingArea';

const GetSeat = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <GenericSafeArea>
      <Header
        onBackPress={onBack}
        title={'Movie name'}
        subtitle={'Date and stuff'}
      />
      <SeatingArea />
    </GenericSafeArea>
  );
};

export default GetSeat;
