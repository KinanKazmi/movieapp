import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';

export const BackContainer = styled.TouchableOpacity`
  marginTop: ${responsiveHeight(5)}px;
  flexDirection: row;
  alignItems: center;
`;

export const BackText = styled.Text`
  alignSelf: center;
`;

export const ImageWrapper = styled.Image`
  width: ${responsiveWidth(8)}px;
  height: ${responsiveWidth(8)}px;
  marginRight: ${responsiveWidth(1)}px;
`;

export const PosterImage = styled.ImageBackground`
  width: ${responsiveWidth(100)}px;
  height: ${responsiveHeight(50)}px;
  borderRadius: ${responsiveHeight(2)}px;
`;
