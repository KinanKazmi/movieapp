import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';

const Spacer = ({
  horizontal = 0,
  vertical = 0.5,
}: {
  horizontal?: number;
  vertical?: number;
}) => {
  const Space = styled.View`
    marginHorizontal: ${responsiveWidth(horizontal)}px;
    marginVertical: ${responsiveHeight(vertical)}px;
  `;
  return <Space />;
};

export default Spacer;
