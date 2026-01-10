import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Api, { IAPIResult } from './Api';

export interface authorDetails{
    name: string,
    username: string,
    avatar_path: string,
    rating: string,
}
export interface IResults{
    author: string,
    authorDetails: authorDetails,
    content: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    url: string,
}

export interface IMovieReviewsResult{
    id: number,
    page: number,
    results: IResults[],
    totalPages: number,
    totalResults: number,
}

export default async function MovieReviewsAPi(
    movie_id: number,
    config?: AxiosRequestConfig,
): Promise<IAPIResult<IMovieReviewsResult> | null> {
    const movieID = String(movie_id);
  try {
    const response = await Api.get<{
      message: string;
      message_Id: string;
      succeeded: boolean;
      data: Object;
    }>('/movie/' + movieID + '/reviews?language=en-US&page=1', {
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
