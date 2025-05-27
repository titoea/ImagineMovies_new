import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IConfigurationProviderProps} from './interfaces';
import MovieDatabaseConfigurationAPi, { IConfigurationResult } from '../../api/MovieDatabaseConfiguration.Api';
import axios, { Canceler } from 'axios';
import ConfigurationContext from './ConfigurationContext';

const ConfigurationProvider: IConfigurationProviderProps = function ConfigurationProvider({
  children,
}) {
  const cancelHttp = useRef<Canceler>();
  const [configuration, setConfiguration] = useState<IConfigurationResult | undefined>();

  const fetchConfiguration = useCallback(
        async () =>{
            const response = await MovieDatabaseConfigurationAPi();
              if (!response){
                //console.log('no response');
                return;
              }
              if (!response.data){
                //console.log(response);
                return;
              }
            return setConfiguration(response.data);
            },
    [],
  );

  useEffect(
    function onSearchDidChange() {
      const timer = setTimeout(() => {
        fetchConfiguration();
      }, 600);
      return function onSearchDidChangeCleanUp() {
        clearTimeout(timer);
      };
    },[fetchConfiguration]);

    return (
    <ConfigurationContext.Provider
      value={{
        configuration,
        fetchConfiguration,
      }}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationProvider;
