import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {IOnboardingStackParamsList} from '../../navigations/interfaces';
export type ISignUpProps = React.FC<
  NativeStackScreenProps<IOnboardingStackParamsList, 'SignUp'> & {}
>;
