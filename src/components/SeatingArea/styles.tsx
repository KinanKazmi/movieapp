import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import theme from '../../theme';

export const SeatingAreaContainer = ({ children }: { children: ReactNode }) => {
  const SeatingContainer = styled.View`
    height: ${responsiveHeight(50)}px;
    backgroundColor: ${theme.colors.background};
  `;
  return <SeatingContainer>{children}</SeatingContainer>;
};

export const SeatIcon = styled.Image<{ rightSpaceSeat: boolean }>`
  alignSelf: center;
  width: ${responsiveWidth(3)}px;
  height: ${responsiveWidth(3)}px;
  margin: ${responsiveWidth(1)}px;
  marginRight: ${(props) => (props.rightSpaceSeat ? '10' : '0')}px;
`;

export const DisabledSeat = styled.View`
  alignSelf: center;
  width: ${responsiveWidth(3)}px;
  height: ${responsiveWidth(3)}px;
  margin: ${responsiveWidth(1)}px;
`;

export const ScreenImage = styled.Image`
  alignSelf: center;
  width: ${responsiveWidth(90)}px;
  height: ${responsiveHeight(10)}px;
  marginTop: ${responsiveHeight(4)}px;
`;

export const ScreenText = styled.Text`
  alignSelf: center;
  textAlign: center;
  fontSize: 8px;
  fontFamily: ${theme.fonts.regular};
  color: ${theme.colors.overviewColor};
  bottom: ${responsiveHeight(6)}px;
`;

export const scrollViewContainerStyle: StyleProp<ViewStyle> = {
  width: responsiveWidth(120),
};

export const flatListContainerStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  paddingHorizontal: responsiveWidth(10),
};
