import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';

export const AppLoader = styled.ActivityIndicator`
  position: absolute;
  top: ${responsiveHeight(50)}px;
  bottom: ${responsiveHeight(50)}px;
  left: ${responsiveWidth(50)}px;
  right: ${responsiveWidth(50)}px;
`;
