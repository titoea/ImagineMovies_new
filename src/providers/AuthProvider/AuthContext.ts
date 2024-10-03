import {createContext, useContext} from 'react';
import {IAuthContext} from './Interfaces';

const AuthContext = createContext<IAuthContext>({
  initializeAuth: () => {},
});

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;
