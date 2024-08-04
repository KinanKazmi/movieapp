import type { TextStyle } from 'react-native';

const theme = {
  colors: {
    darkBackground: '#2E2739',
    background: '#F6F6FA',
    white: '#FFFFFF',
    darkGray: '#827D88',
    lightGray: '#DBDBDF',
    blue: '#61C3F2',
    green: '#15D2BC',
    pink: '#E26CA5',
    purple: '#564CA3',
    yellow: '#CD9D0F',
    black: '#202C43',
    blackLight: '#202C434D',
    searchBarBG: '#F2F2F6',
    borderGray: '#EFEFEF',
  },
  fonts: {
    black: 'Poppins-Black',
    blackItalic: 'Poppins-BlackItalic',
    bold: 'Poppins-Bold',
    BoldItalic: 'Poppins-BoldItalic',
    extraBold: 'Poppins-ExtraBold',
    extraBoldItalic: 'Poppins-ExtraBoldItalic',
    extraLight: 'Poppins-ExtraLight',
    extraLightItalic: 'Poppins-ExtraLightItalic',
    italic: 'Poppins-Italic',
    light: 'Poppins-Light',
    lightItalic: 'Poppins-LightItalic',
    medium: 'Poppins-Medium',
    mediumItalic: 'Poppins-MediumItalic',
    regular: 'Poppins-Regular',
    semiBold: 'Poppins-SemiBold',
    semiBoldItalic: 'Poppins-SemiBoldItalic',
    thin: 'Poppins-Thin',
    thinItalic: 'Poppins-ThinItalic',
  },
};

export const appFonts = {
  tabBar: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
  } as TextStyle,
  pageHeading: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
  } as TextStyle,
  movieTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
  } as TextStyle,
  searchPlaceHolder: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.blackLight,
  } as TextStyle,
  movieCategory: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white,
  } as TextStyle,
  searchInput: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.black,
  } as TextStyle,
  searchHeading: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
  } as TextStyle,
  searchListMovieTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
  } as TextStyle,
  searchListMovieCategory: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.lightGray,
  } as TextStyle,
  searchResultsText: {
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    color: theme.colors.black,
  } as TextStyle,
};

export default theme;
