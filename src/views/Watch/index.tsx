import type { MovieType } from '../../redux/apiTypes';
import type { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import WatchHeader from '../../components/WatchHeader';
import { flatListContantContainer, WatchContainer } from './styles';
import theme from '../../theme';
import { useFetchUpcomingQuery } from '../../redux/apis';
import { Loader } from '../../components/Loader';
import MainListItem from './MainListItem';
import { useNavigation } from '@react-navigation/native';

const Watch = () => {
  const { data, isLoading } = useFetchUpcomingQuery();
  const navigation =
    useNavigation<NavigationProp<{ MovieDetail: { movie: MovieType } }>>();

  const onImagePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', { movie: item });
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.white}
      />
      <WatchContainer>
        <WatchHeader />
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            contentContainerStyle={flatListContantContainer}
            data={data?.results}
            renderItem={({ item }) => (
              <MainListItem item={item} onPress={() => onImagePress(item)} />
            )}
          />
        )}
      </WatchContainer>
    </>
  );
};

export default Watch;
