import type { ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const WatchContainer = styled.SafeAreaView`
  flex: 1;
`;

export const flatListContantContainer: ViewStyle = {
  backgroundColor: theme.colors.lightGray,
  alignContent: 'center',
};

export const ImageWrapper = styled.TouchableOpacity`
  alignSelf: center;
  width: ${responsiveWidth(95)}px;
  height: ${responsiveHeight(25)}px;
  marginHorizontal: ${responsiveWidth(10)}px;
  marginVertical: ${responsiveHeight(2)}px;
  borderRadius: ${responsiveHeight(2)}px;
  overflow: hidden;
`;

export const PosterImage = styled.ImageBackground`
  flex: 1;
  justifyContent: flex-end;
`;

export const MovieTitleText = styled.Text`
  marginLeft: ${responsiveWidth(6)}px;
  marginBottom: ${responsiveHeight(2)}px;
  textShadowColor: ${theme.colors.lightGray};
  textShadowRadius: 2px;
`;
