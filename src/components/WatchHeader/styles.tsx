import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import theme from '../../theme';

export const WatchHeaderContainer = styled.View`
  height: ${responsiveHeight(10)}px;
  width: ${responsiveWidth(100)}px;
  backgroundColor: ${theme.colors.white};
  borderColor: ${theme.colors.borderGray};
`;

export const WatchHeaderContainerInner = styled.View`
  flex: 1;
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between;
  marginHorizontal: ${responsiveWidth(5)}px;
`;
