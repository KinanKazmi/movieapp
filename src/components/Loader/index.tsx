import React from 'react';
import theme from '../../theme';
import { AppLoader } from './styles';

export const Loader = () => {
  return <AppLoader size={'large'} color={theme.colors.darkBackground} />;
};
