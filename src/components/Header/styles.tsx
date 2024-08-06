import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import theme from '../../theme';

export const HeaderContainer = styled.View`
  width: ${responsiveWidth(100)}px;
  height: ${responsiveHeight(10)}px;
  backgroundColor: ${theme.colors.white};
`;

export const HeaderInternalContainer = styled.View`
  marginTop: 30px;
  flexDirection: row;
`;

export const SideArea = styled.View`
  width: ${responsiveWidth(20)}px;
`;

export const CenterArea = styled.View`
  width: ${responsiveWidth(60)}px;
`;

export const HeaderTitle = styled.Text`
  height: 50%;
  alignitems: center;
  justifyContent: flex-end;
  textAlign: center;
  fontSize: 16px;
  fontFamily: ${theme.fonts.medium};
  color: ${theme.colors.black};
`;

export const HeaderSubTitle = styled.Text`
  height: 50%;
  alignitems: center;
  justifyContent: flex-start;
  textAlign: center;
  fontSize: 12px;
  fontFamily: ${theme.fonts.medium};
  color: ${theme.colors.blue};
`;
