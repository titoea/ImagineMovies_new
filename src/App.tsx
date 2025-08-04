import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './navigations/AppNavigationContainer';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import ConfigurationProvider from './providers/ConfigurationProvider/ConfigurationProvider';
import UserProvider from './providers/UserProvider/UserProvider';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <ConfigurationProvider>
          <AppNavigationContainer />
        </ConfigurationProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
