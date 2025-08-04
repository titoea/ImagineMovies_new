import React from 'react';
import HamburgerSVG from '../../assets/icons/Hamburger.svg';
import HomeSVG from '../../assets/icons/home.svg';
import ReservationsSVG from '../../assets/icons/reservations.svg';
import SettingsSVG from '../../assets/icons/settings.svg';
import HelpSVG from '../../assets/icons/help.svg';
import PlaySVG from '../../assets/icons/play.svg';
import PlusSVG from '../../assets/icons/plus.svg';
import AvatarSVG from '../../assets/icons/avatar.svg';
import PopcornLargeSVG from '../../assets/images/popcorn_large.svg';
import PopcornMediumSVG from '../../assets/images/popcorn_medium.svg';
import PopcornSmallSVG from '../../assets/images/popcorn_small.svg';
import FantaSVG from '../../assets/images/fanta.svg';
import CokeSVG from '../../assets/images/coke.svg';
import PepsiSVG from '../../assets/images/pepsi.svg';
import AddLargeSVG from '../../assets/icons/addLarge.svg';
import RemoveSVG from '../../assets/icons/remove.svg';
import HotDogSVG from '../../assets/images/hotdog.svg';
import SeatSVG from '../../assets/icons/seat_white.svg';
import RadioSVG from '../../assets/icons/radio.svg';
import HomeTabSVG from '../../assets/icons/hometab.svg';
import MembershipSVG from '../../assets/icons/membership.svg';
import RefreshmentSVG from '../../assets/icons/refreshment.svg';
import AccountSVG from '../../assets/icons/account.svg';
import ClockSVG from '../../assets/icons/clock.svg';
import {IconProps} from './interfaces';
import { Pressable } from 'react-native';

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

export const PlayIcon: React.FC<IconProps> = function PlayIcon({color, size, opacity,handlePress}){
  return (
    <Pressable onPress={handlePress}>
      <PlaySVG
      fill={color || 'transparent'}
      width={size || 40}
      height={size || 40}
      opacity={opacity || 1}
      />
    </Pressable>
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

export const AvatarIcon: React.FC<IconProps> = function AvatarIcon({color, size, opacity}){
  return (
    <AvatarSVG
    fill={color || 'transparent'}
    width={size || 50}
    height={size || 50}
    opacity={opacity || 1}
    />
  );
};

export const PopcornLargeIcon: React.FC<IconProps> = function PopcornLargeIcon({color, size, opacity}){
 return (
  <PopcornLargeSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const PopcornMediumIcon: React.FC<IconProps> = function PopcornMediumIcon({color, size, opacity}){
 return (
  <PopcornMediumSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const PopcornSmallIcon: React.FC<IconProps> = function PopcornSmallIcon({color, size, opacity}){
 return (
  <PopcornSmallSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const FantaIcon: React.FC<IconProps> = function FantaIcon({color, size, opacity}){
 return (
  <FantaSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const CokeIcon: React.FC<IconProps> = function CokeIcon({color, size, opacity}){
 return (
  <CokeSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const PepsiIcon: React.FC<IconProps> = function PepsiIcon({color, size, opacity}){
 return (
  <PepsiSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
 );
};

export const AddLargeIcon: React.FC<IconProps> = function AddLargeIcon({color, size, opacity, handlePress}){
return (
  <Pressable onPress={handlePress}>
    <AddLargeSVG
     fill={color}
      width={size}
      height={size}
      opacity={opacity}
    />
  </Pressable>
  );
};

export const HotDogIcon: React.FC<IconProps> = function HotDogIcon({color, size, opacity}){
return (
  <HotDogSVG
   fill={color}
    width={size}
    height={size}
    opacity={opacity}
  />
  );
};

export const RemoveIcon: React.FC<IconProps> = function RemoveIcon({color, size, opacity, handlePress}){
return (
  <Pressable onPress={handlePress}>
    <RemoveSVG
     fill={color}
      width={size}
      height={size}
      opacity={opacity}
    />
  </Pressable>
  );
};

export const SeatIcon: React.FC<IconProps> = function SeatIcon({color, size, opacity, style}){
  return(
    <SeatSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    />
  );
};

export const RadioIcon: React.FC<IconProps> = function RadioIcon({color, size, opacity, style}){
  return(
    <RadioSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};

export const HomeTabIcon: React.FC<IconProps> = function HomeTabIcon({color, size, opacity, style}){
  return(
    <HomeTabSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};

export const MembershipIcon: React.FC<IconProps> = function MembershipIcon({color, size, opacity, style}){
  return(
    <MembershipSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};
export const RefreshmentIcon: React.FC<IconProps> = function RefreshmentIcon({color, size, opacity, style}){
  return(
    <RefreshmentSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};
export const AccountIcon: React.FC<IconProps> = function AccountIcon({color, size, opacity, style}){
  return(
    <AccountSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};
export const ClockIcon: React.FC<IconProps> = function ClockIcon({color, size, opacity, style}){
  return(
    <ClockSVG
    fill={color}
    width={size}
    height={size}
    opacity={opacity}
    style={style}
    stroke={color}
    />
  );
};
