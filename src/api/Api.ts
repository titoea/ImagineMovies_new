import Axios from 'axios';
import { ApiErrorLogger, ErrorLogger } from '../utils/Logger.util';


// create instance of api
const Api = Axios.create({baseURL: 'https://api.themoviedb.org/3' });

/**
 * Intercept request and add some required fields.
 * @return Promise
 */
Api.interceptors.request.use(
  async config => {
    config.method = 'GET';
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'text/plain',
      ...config.headers,
    };

    config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzYyNTYxOGRkMGVhYTUxYWE3NzNjMGIxN2Y0NjczOSIsIm5iZiI6MTczODY3NjAzNi42ODksInN1YiI6IjY3YTIxNzQ0YTQ1Mjg3YjdmZGUyZGVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-yxdlMQdBtuzAqsQ7vFBjcl-zV2Af31EKbZztn0e-M';

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    try {
      ApiErrorLogger(error);
    } catch (e) {
      ErrorLogger(e as Error);
    } finally {
      return Promise.reject({...error});
    }
  },
);

// generic api result object for all api files
export type IAPIResult<D = any> = {
  message: string;
  data?: D | undefined;
  code: number;
  responseCode?: string;
  servertime?: string;
  message_Id?: string;
  succeeded?: boolean;
};

// export Api as module
export default Api;
