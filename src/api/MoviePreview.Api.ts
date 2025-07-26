import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Api, { IAPIResult } from './Api';

export interface IResults{
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

export interface IMoviePreviewResult{
    id: number,
    results: IResults[],
}

export default async function MoviePreviewAPi(
    movie_id: number,
    config?: AxiosRequestConfig,
): Promise<IAPIResult<IMoviePreviewResult> | null> {
    const movieID = String(movie_id);
  try {
    const response = await Api.get<{
      message: string;
      message_Id: string;
      succeeded: boolean;
      data: Object;
    }>('/movie/' + movieID + 'videos', {
      ...config,
      headers: {...config?.headers},
    });
    return Promise.resolve({
      code: response.status,
      message: response.data.message,
      data: response.data,
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
