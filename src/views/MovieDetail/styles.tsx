import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import theme from '../../theme';

export const PosterImage = styled.ImageBackground`
  width: ${responsiveWidth(100)}px;
  height: ${responsiveHeight(50)}px;
  borderRadius: ${responsiveHeight(2)}px;
`;

export const ReleaseDate = styled.Text`
  alignSelf: center;
`;

export const DetailArea = styled.ScrollView`
  margin: 10%;
  backgroundColor: ${theme.colors.background};
`;

export const DetailHeadingText = styled.Text`
  fontSize: 16px;
  fontFamily: ${theme.fonts.medium};
  color: ${theme.colors.black};
`;

export const OverviewText = styled.Text`
  fontSize: 12px;
  fontFamily: ${theme.fonts.medium};
  color: ${theme.colors.overviewColor};
`;

export const GenreView = ({
  genre,
  color,
}: {
  genre: string;
  color: string;
}) => {
  const GenreBox = styled.Text`
    fontSize: 12px;
    fontFamily: ${theme.fonts.bold};
    color: ${theme.colors.white};
    backgroundColor: ${color};
    borderRadius: 20px;
    paddingHorizontal: 10px;
    marginRight: 10px;
    paddingVertical: 1px;
  `;
  return <GenreBox>{genre}</GenreBox>;
};

export const GenreSection = () => {
  const Row = styled.View`
    flexDirection: row`;
  return (
    <Row>
      <GenreView genre={'Action'} color={theme.colors.green} />
      <GenreView genre={'Thriller'} color={theme.colors.pink} />
      <GenreView genre={'Science'} color={theme.colors.purple} />
      <GenreView genre={'Fiction'} color={theme.colors.yellow} />
    </Row>
  );
};
