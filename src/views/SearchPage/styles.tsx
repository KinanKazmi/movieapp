import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import theme, { appFonts } from '../../theme';
import styled from 'styled-components/native';

export const SafeView = styled.SafeAreaView`
  flex: 1;
  backgroundColor: white;
`;

export const ImageWrapper = styled.TouchableOpacity`
flex: 1;
  width: ${responsiveWidth(40)}px;
  height: ${responsiveHeight(15)}px;
  margin: ${responsiveWidth(2)}px;
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

export const styles = StyleSheet.create({
  flatListContantContainer: {
    backgroundColor: theme.colors.lightGray,
    maxWidth: responsiveWidth(100),
    justifyContent: 'center',
  },
  input: {
    ...appFonts.searchInput,
  },
  searchBarContainer: {
    alignSelf: 'center',
    borderRadius: 40,
    width: responsiveWidth(95),
    backgroundColor: theme.colors.searchBarBG,
    borderColor: theme.colors.borderGray,
    marginVertical: 20,
  },
  inputContainerStyle: {
    backgroundColor: theme.colors.searchBarBG,
    borderColor: theme.colors.borderGray,
  },
});
