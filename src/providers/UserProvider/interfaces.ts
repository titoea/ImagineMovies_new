import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React from 'react';
export type TicketType = {
    movieName: string,
    movieDate: string,
    movieTime: string,
    movieImage: string,
    quantity: number,
};

export type User = {
    name: string;
    email: string;
    password: string;
}
export interface IUserContext {
    user: FirebaseAuthTypes.User,
    tickets: TicketType[],
    initializing: boolean,
    loginWithEmail: (email: string, password: string) => void,
    loginWithGoogle: () => void,
    signUpWithEmail: (email: string, password: string) => void,
    populateTicketsList: (ticketData:TicketType[]) =>void,
    logout: () => void,
}
export type IUserProviderProps = React.FC<{children: React.ReactNode}>;
