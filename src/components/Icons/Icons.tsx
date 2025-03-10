import React from 'react';
import HamburgerSVG from '../../assets/icons/Hamburger.svg';
import HomeSVG from '../../assets/icons/home.svg';
import ReservationsSVG from '../../assets/icons/reservations.svg';
import SettingsSVG from '../../assets/icons/settings.svg';
import HelpSVG from '../../assets/icons/help.svg';
import PlaySVG from '../../assets/icons/play.svg';
import PlusSVG from '../../assets/icons/plus.svg';
import {IconProps} from './interfaces';

export const HamburgerIcon: React.FC<IconProps> = function HamburgerIcon({
  color,
  size,
  opacity,
}) {
  // const {themeColors} = useTheme();
  return (
    <HamburgerSVG
      fill={color || 'blue'}
      width={size || 16}
      height={size || 16}
      opacity={opacity || 1}
    />
  );
};

export const HomeIcon: React.FC<IconProps> = function HomeIcon({
  color, size, opacity,
}) {
  return(
    <HomeSVG
    fill={color || 'blue'}
    width={size || 16}
    height={size || 16}
    opacity={opacity || 1}
    />
  );
};

export const ReservationsIcon: React.FC<IconProps> = function ReservationsIcon({ color, size, opacity}){
  return (
    <ReservationsSVG
    fill={color || 'blue'}
    width={size || 16}
    height={size || 16}
    opacity={opacity || 1}
    />
  );
};

export const SettingsIcon: React.FC<IconProps> = function SettingsIcon({ color, size, opacity}){
  return (
    <SettingsSVG
    fill={color || 'blue'}
    width={size || 16}
    height={size || 16}
    opacity={opacity || 1}
    />
  );
};

export const HelpIcon: React.FC<IconProps> = function HelpIcon({ color, size, opacity}){
  return (
    <HelpSVG
    fill={color || 'blue'}
    width={size || 16}
    height={size || 16}
    opacity={opacity || 1}
    />
  );
};

export const PlayIcon: React.FC<IconProps> = function PlayIcon({color, size, opacity}){
  return (
    <PlaySVG
    fill={color || 'transparent'}
    width={size || 40}
    height={size || 40}
    opacity={opacity || 1}
    />
  );
};

export const PlusIcon: React.FC<IconProps> = function PlusIcon({color, size, opacity}){
  return (
    <PlusSVG
    fill={color || 'transparent'}
    width={size || 50}
    height={size || 50}
    opacity={opacity || 1}
    />
  );
};