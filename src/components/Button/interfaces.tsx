import React from 'react';
import {PressableProps} from 'react-native';
export type IButtonProps = React.FC<
  PressableProps & {children: React.ReactNode}
>;
