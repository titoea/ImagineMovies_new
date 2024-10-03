import React, {useCallback} from 'react';
import {useState} from 'react';
import AuthContext from './AuthContext';
import {IAuthProviderProps} from './Interfaces';

const AuthProvider: IAuthProviderProps = function AuthProvider({children}) {
  const [sessionId, setSessionId] = useState<string>();

  const generateSessionId = useCallback(() => {
    return 'ABCDEFGHIJ';
  }, []);

  const saveAuth = useCallback(() => {}, []);

  const initializeAuth = useCallback(() => {
    setSessionId(generateSessionId());
  }, [generateSessionId]);

  return (
    <AuthContext.Provider
      value={{
        authSessionId: sessionId,
        initializeAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
