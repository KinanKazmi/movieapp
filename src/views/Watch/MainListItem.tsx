import type { UpcomingResult } from '../../redux/apiTypes';
import React from 'react';
import { ImageWrapper, MovieTitleText, PosterImage } from './styles';
import { appFonts } from '../../theme';
import { getMovieImageUrl } from '../../utils';

const MainListItem = ({
  item,
  onPress,
}: {
  item: UpcomingResult;
  onPress: () => void;
}) => {
  const imagePath = getMovieImageUrl(item.backdrop_path);
  return (
    <ImageWrapper onPress={onPress}>
      <PosterImage source={{ uri: imagePath }} resizeMode="cover">
        <MovieTitleText style={appFonts.movieTitle}>
          {item.title}
        </MovieTitleText>
      </PosterImage>
    </ImageWrapper>
  );
};

export default MainListItem;
