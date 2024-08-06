import React from 'react';
import { BackWithText } from '../../sharedStyles';
import {
  CenterArea,
  SideArea,
  HeaderContainer,
  HeaderTitle,
  HeaderSubTitle,
  HeaderInternalContainer,
} from './styles';

const Header = ({
  onBackPress,
  title,
  subtitle,
}: {
  onBackPress: () => void;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <HeaderContainer>
      <HeaderInternalContainer>
        <SideArea>
          <BackWithText onPress={onBackPress} dark noMargin />
        </SideArea>
        <CenterArea>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubTitle>{subtitle}</HeaderSubTitle>
        </CenterArea>
        <SideArea />
      </HeaderInternalContainer>
    </HeaderContainer>
  );
};

export default Header;
