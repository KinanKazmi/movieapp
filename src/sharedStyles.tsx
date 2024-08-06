import type { ReactNode } from 'react';
import type { TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

import React from 'react';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import theme, { appFonts } from './theme';
import BackIcon from './assets/icons/BackIcon.png';

export const IconImage = styled.Image`
  alignSelf: center;
  width: ${responsiveWidth(6)}px;
  height: ${responsiveWidth(6)}px;
`;

export const tabBarStyle: ViewStyle = {
  height: responsiveHeight(10),
  paddingBottom: responsiveHeight(2),
  backgroundColor: theme.colors.darkBackground,
  borderTopRightRadius: responsiveHeight(5),
  borderTopLeftRadius: responsiveHeight(5),
};

export const tabBarLabelStyle: TextStyle = {
  ...appFonts.tabBar,
};

export const GenericIcon = styled.Image`
  width: 15px;
  height: 15px;
  alignSelf: center;
  margin: 5px;
`;

export const GenericText = styled.Text`
  alignSelf: center;
  textAlign: center;
  fontSize: 20px;
  fontFamily: ${theme.fonts.bold};
  color: ${theme.colors.black};
`;

export const GenericSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  alignSelf: center;
  alignItems: center;
  justifyContent: center;
  width: ${responsiveWidth(60)}px;
  height: ${responsiveHeight(6)}px;
  borderRadius: 10px;
  borderWidth: 1px;
  borderColor: ${theme.colors.blue};
`;

export const CustomButton = ({
  children,
  filled,
  ...props
}: {
  children: ReactNode;
  filled?: boolean;
} & TouchableOpacityProps) => {
  const StyledButton = styled(Button)`
    backgroundColor: ${filled ? theme.colors.blue : 'transparent'};
    flexDirection: row;
  `;
  return <StyledButton {...props}>{children}</StyledButton>;
};

const BackContainer = styled.TouchableOpacity<{
  absolute?: boolean;
  noMargin?: boolean;
}>`
  zIndex: 2;
  left: ${(props) => (props.absolute ? '20px' : 'undefined')};
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  marginTop: ${(props) =>
    props.absolute ?? props.noMargin ? 0 : responsiveHeight(5)}px;
  flexDirection: row;
`;

const BackText = styled.Text`
  alignSelf: center;
  top: 1.5px;
`;

const BackImage = styled.Image`
  alignSelf: center;
  width: 30px;
  height: 30px;
  marginRight: ${responsiveWidth(2)}px;
`;

export const BackWithText = ({
  onPress,
  text,
  absolute,
  dark,
  noMargin,
}: {
  dark?: boolean;
  noMargin?: boolean;
  absolute?: boolean;
  onPress: () => void;
  text?: string;
}) => {
  return (
    <BackContainer onPress={onPress} absolute={absolute} noMargin={noMargin}>
      <BackImage
        resizeMode="contain"
        source={BackIcon}
        tintColor={dark ? theme.colors.black : undefined}
      />
      {text && (
        <BackText
          style={[
            appFonts.movieCategory,
            dark && { color: theme.colors.black },
          ]}
        >
          {text}
        </BackText>
      )}
    </BackContainer>
  );
};
