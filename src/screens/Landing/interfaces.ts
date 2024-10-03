import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {IOnboardingStackParamsList} from '../../navigations/interfaces';
export type ILandingProps = React.FC<
  NativeStackScreenProps<IOnboardingStackParamsList, 'Landing'> & {}
>;
