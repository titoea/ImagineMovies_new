import React from 'react';
import HamburgerSVG from '../../assets/icons/Hamburger.svg';
import {IconProps} from './interfaces';

export const HamburgerIcon: React.FC<IconProps> = function HamburgerIcon({
  color,
  size,
  opacity,
}) {
  // const {themeColors} = useTheme();
  return (
    <HamburgerSVG
      fill={color}
      width={size || 16}
      height={size || 16}
      opacity={opacity || 1}
    />
  );
};
