import type { MovieType } from '../../redux/apiTypes';
import type { NavigationProp } from '@react-navigation/native';
import React from 'react';
import WatchHeader from '../../components/WatchHeader';
import { flatListContantContainer, WatchContainer } from './styles';
import { useFetchUpcomingQuery } from '../../redux/apis';
import { Loader } from '../../components/Loader';
import MainListItem from './MainListItem';
import { useNavigation } from '@react-navigation/native';
import { CollapsibleHeaderFlatList } from 'react-native-collapsible-header-views';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { StatusBar } from 'react-native';

const Watch = () => {
  const { data, isLoading } = useFetchUpcomingQuery();
  const navigation =
    useNavigation<NavigationProp<{ MovieDetail: { movie: MovieType } }>>();

  const onImagePress = (item: MovieType) => {
    navigation.navigate('MovieDetail', { movie: item });
  };

  return (
    <>
      <WatchContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <CollapsibleHeaderFlatList
            CollapsibleHeaderComponent={() => <WatchHeader />}
            headerHeight={responsiveHeight(10)}
            data={data?.results}
            keyExtractor={(item: MovieType) => item.id.toString()}
            renderItem={({ item }) => (
              <MainListItem item={item} onPress={() => onImagePress(item)} />
            )}
            contentContainerStyle={flatListContantContainer}
            disableHeaderSnap={false}
          />
        )}
      </WatchContainer>
    </>
  );
};

export default Watch;
