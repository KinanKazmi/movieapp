import React from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import theme from '../theme';

const Divider = () => {
  const Space = styled.View`
    height: 1px;
    width: ${responsiveWidth(80)}px;
    backgroundColor: ${theme.colors.lightGray};
    alignSelf: center;
  `;
  return <Space />;
};

export default Divider;
