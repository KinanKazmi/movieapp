import type { MovieType } from '../../redux/apiTypes';
import React from 'react';
import Spacer from '../../components/Spacer';
import { Divider } from '@rneui/base';
import {
  DetailArea,
  DetailHeadingText,
  GenreSection,
  OverviewText,
} from './styles';

const MovieDetailsArea = ({ movie }: { movie: MovieType }) => {
  return (
    <DetailArea>
      <DetailHeadingText>{'Genres'}</DetailHeadingText>
      <Spacer />
      <GenreSection />
      <Spacer vertical={1.5} />
      <Divider />
      <Spacer vertical={1.5} />
      <DetailHeadingText>{'Overview'}</DetailHeadingText>
      <Spacer />
      <OverviewText>{movie.overview}</OverviewText>
      <Spacer />
    </DetailArea>
  );
};

export default MovieDetailsArea;
