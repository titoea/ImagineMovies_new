import React , { useCallback, useEffect, useState } from 'react';
import { IUserProviderProps, TicketType } from './interfaces';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, FirebaseAuthTypes, signInWithEmailAndPassword} from '@react-native-firebase/auth';
import UserContext from './UserContext';
import EncryptedStorage from 'react-native-encrypted-storage';

const UserProvider: IUserProviderProps  = function UserProvider({children}){
    const [initializing, setInitializing] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
    const [tickets, setTickets] = useState<TicketType[]>();
    const auth = getAuth();

    const handleAuthStateChanged = useCallback((authUser: FirebaseAuthTypes.User | null)=>{
        setUser(authUser);
        if (initializing){
            setInitializing(false);
        }
    },[initializing]);

    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth, handleAuthStateChanged);
        return subscriber;
    },[auth, handleAuthStateChanged]);

    const signUpWithEmail = useCallback((email: string, password: string) =>{
       createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
        setUser(userCredential.user);
        console.log('User account created & signed in!');
       }).catch(error =>{
        if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }
       });
    },[auth]);
    const loginWithEmail = useCallback((email: string, password: string) => {
       signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('No user found for that email.');
        }

        if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password.');
        }

        console.error(error);
      });
    }, [auth]);
    const loginWithGoogle = useCallback(() => {}, []);
    const logout = useCallback(() => {}, []);
    const populateTicketsList = useCallback(async(ticketData: TicketType)=>{
          setTickets(tickets ? [ ...tickets, ticketData] : [ticketData]);
            try{
                await EncryptedStorage.setItem('tickets', JSON.stringify(tickets ? [...tickets, ticketData] : [ticketData]));
             }catch(error){
                console.log('something went wrong while storing in BookSeats function');
            }
        },[tickets]);
     return (
    <UserContext.Provider
      value={{
       user: user,
       tickets: tickets,
       initializing: initializing,
       loginWithEmail,
       loginWithGoogle,
       signUpWithEmail,
       populateTicketsList,
       logout,
      }}>
      {children}
    </UserContext.Provider>
  );
}



export default UserProvider;
