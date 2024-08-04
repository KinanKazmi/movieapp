import type { RouteProp, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackScreenList';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackContainer, BackText, ImageWrapper, PosterImage } from './styles';
import { getMovieImageUrl } from '../../utils';
import BackIcon from '../../assets/icons/BackIcon.png';
import { appFonts } from '../../theme';

const MovieDetail = ({
  route,
}: {
  route: RouteProp<RootStackParamList, 'MovieDetail'>;
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { movie } = route.params;
  const imagePath = getMovieImageUrl(movie.backdrop_path);
  console.log('movie', movie);
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <PosterImage source={{ uri: imagePath }}>
      <BackContainer onPress={onBack}>
        <ImageWrapper resizeMode="contain" source={BackIcon} />
        <BackText style={appFonts.movieCategory}>{'Watch'}</BackText>
      </BackContainer>
    </PosterImage>
  );
};

export default MovieDetail;
