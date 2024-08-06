import type { RouteProp, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackScreenList';

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { PosterImage, ReleaseDate } from './styles';
import { getMovieImageUrl } from '../../utils';
import { appFonts } from '../../theme';
import PlayIcon from '../../assets/icons/PlayIcon.png';
import Spacer from '../../components/Spacer';
import {
  BackWithText,
  CustomButton,
  GenericIcon,
  GenericSafeArea,
  GenericText,
} from '../../sharedStyles';
import MovieDetailsArea from './MovieDetailsArea';
import { useFetchMovieVideoQuery } from '../../redux/apis';
import { StatusBar } from 'react-native';

const MovieDetail = ({
  route,
}: {
  route: RouteProp<RootStackParamList, 'MovieDetail'>;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { movie } = route.params;
  const imagePath = getMovieImageUrl(movie.backdrop_path);
  const { data } = useFetchMovieVideoQuery({
    movie_id: movie.id.toString(),
  });
  const trailer = data?.results.find(
    (item) =>
      item.type === 'Trailer' &&
      item.name === 'Official Trailer' &&
      item.site === 'YouTube'
  );
  const releaseDate = new Date(movie.release_date);
  const dateString = releaseDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const onBack = () => {
    navigation.goBack();
  };

  const onPlay = () => {
    navigation.navigate('VideoPlayer', { video: trailer });
  };

  const onGetSeat = () => {
    navigation.navigate('GetSeat');
  };

  return (
    <GenericSafeArea>
      <StatusBar hidden={false} />
      <PosterImage source={{ uri: imagePath }}>
        <BackWithText onPress={onBack} text={'Watch'} />
        <Spacer vertical={10} />
        <ReleaseDate style={appFonts.movieCategory}>
          {`In theaters ${dateString}`}
        </ReleaseDate>
        <Spacer vertical={0.25} />
        <CustomButton filled onPress={onGetSeat}>
          <GenericText style={appFonts.movieCategory}>
            {'Get Tickets'}
          </GenericText>
        </CustomButton>
        <Spacer />
        <CustomButton onPress={onPlay} disabled={!trailer}>
          <GenericIcon source={PlayIcon} resizeMode="contain" />
          <GenericText style={appFonts.movieCategory}>
            {'Watch Trailer'}
          </GenericText>
        </CustomButton>
      </PosterImage>
      <MovieDetailsArea movie={movie} />
    </GenericSafeArea>
  );
};

export default MovieDetail;
