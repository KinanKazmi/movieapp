import React from 'react';
import theme from '../../theme';
import { AppLoader } from './styled';

export const Loader = () => {
  return <AppLoader size={'large'} color={theme.colors.darkBackground} />;
};
