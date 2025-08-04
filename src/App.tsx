import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './navigations/AppNavigationContainer';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import ConfigurationProvider from './providers/ConfigurationProvider/ConfigurationProvider';
import UserProvider from './providers/UserProvider/UserProvider';
import { PaystackProvider } from 'react-native-paystack-webview';

const App = () => {
  return (
    <AuthProvider>
        <UserProvider>
          <ConfigurationProvider>
             <PaystackProvider publicKey="pk_test_488748601486041efe7a4836ec8fb3eda11d65b8" debug={true}>
            <AppNavigationContainer />
             </PaystackProvider>
          </ConfigurationProvider>
        </UserProvider>
    </AuthProvider>
  );
};

export default App;
