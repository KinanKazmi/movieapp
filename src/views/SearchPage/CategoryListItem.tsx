import type { UpcomingResult } from '../../redux/apiTypes';
import React from 'react';
import { ImageWrapper, MovieTitleText, PosterImage } from './styles';
import { imageBaseUrl, imageSize } from '../../constEnv';
import { appFonts } from '../../theme';

const CategoryListItem = ({
  item,
  onPress,
}: {
  item: UpcomingResult;
  onPress: () => void;
}) => {
  const imagePath = `${imageBaseUrl}${imageSize}${item.poster_path}`;

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

export default CategoryListItem;
