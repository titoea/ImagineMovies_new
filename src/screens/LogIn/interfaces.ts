import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {IOnboardingStackParamsList} from '../../navigations/interfaces';
export type ILogInProps = React.FC<
  NativeStackScreenProps<IOnboardingStackParamsList, 'LogIn'> & {}
>;
