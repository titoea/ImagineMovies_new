import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import Api, {IAPIResult} from './Api';


export interface IConfigurationResult {
    images : {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: string[];
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        still_sizes: string[]
    }
    change_keys: string[];
}

export default async function MovieDatabaseConfigurationAPi(
): Promise<IAPIResult<IConfigurationResult> | null> {
  try {
    const response = await Api.get<{
      message: string;
      message_Id: string;
      succeeded: boolean;
      data: IConfigurationResult;
    }>('/configuration');

    return Promise.resolve({
      code: response.status,
      message: response.data.message,
      data: response.data.data,
    });
  } catch (e) {
    if (axios.isCancel(e)) {
      return Promise.resolve(null);
    }
    const statusCode = (e as AxiosError).response?.status || 0;
    const errorMessage =
      (e as AxiosError).response?.data.message || (e as Error).message;
    return Promise.resolve({
      code: statusCode,
      message: errorMessage,
      data: undefined,
    });
  }
}
