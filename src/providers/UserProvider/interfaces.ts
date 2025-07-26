import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React from 'react';

export type User = {
    name: string;
    email: string;
    password: string;
}
export interface IUserContext {
    user: FirebaseAuthTypes.User,
    initializing: boolean,
    loginWithEmail: (email: string, password: string) => void,
    loginWithGoogle: () => void,
    signUpWithEmail: (email: string, password: string) => void,
    logout: () => void,
}
export type IUserProviderProps = React.FC<{children: React.ReactNode}>;
