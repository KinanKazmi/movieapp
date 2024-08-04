import type { TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import theme, { appFonts } from './theme';

export const IconImage = styled.Image`
  alignSelf: center;
  width: ${responsiveWidth(6)}px;
  height: ${responsiveWidth(6)}px;
`;

export const tabBarStyle: ViewStyle = {
  height: responsiveHeight(10),
  paddingBottom: responsiveHeight(2),
  backgroundColor: theme.colors.darkBackground,
  borderTopRightRadius: responsiveHeight(5),
  borderTopLeftRadius: responsiveHeight(5),
};

export const tabBarLabelStyle: TextStyle = {
  ...appFonts.tabBar,
};

export const GenericText = styled.Text`
  fontSize: 20px;
  fontFamily: ${theme.fonts.bold};
  color: ${theme.colors.black};
`;

export const GenericSafeArea = styled.SafeAreaView`
  flex: 1;
  alignItems: center;
  justifyContent: center;
`;
