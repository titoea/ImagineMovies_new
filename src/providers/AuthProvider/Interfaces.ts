import React from 'react';
export type IAuthData = {
  token: string;
};

export interface IAuthContext {
  authSessionId?: string;
  initializeAuth: (data: IAuthData) => void;
}

export type IAuthProviderProps = React.FC<{children: React.ReactNode}>;
