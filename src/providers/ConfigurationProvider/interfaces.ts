import React from 'react';
import { IConfigurationResult } from '../../api/MovieDatabaseConfiguration.Api';

export interface IConfigurationContext {
  configuration?: IConfigurationResult;
  fetchConfiguration: () => void;
}

export type IConfigurationProviderProps = React.FC<{children: React.ReactNode}>;
