import {createContext, useContext} from 'react';
import { IConfigurationContext } from './interfaces';

const ConfigurationContext = createContext<IConfigurationContext>({
    fetchConfiguration: () => {},
});

export function useConfiguration() {
  const context = useContext(ConfigurationContext);
  return context;
}

export default ConfigurationContext;
