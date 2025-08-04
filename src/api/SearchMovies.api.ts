import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import Api, {IAPIResult} from './Api';

export interface IResults{
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
}
export interface ISearchMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    },
    page: number;
    results : IResults[]
    total_pages: number;
    total_results: number;
}

export default async function SearchMoviesAPi(
    keyword: string,
    config?: AxiosRequestConfig,
): Promise<IAPIResult<ISearchMoviesResult> | null> {
  try {
    const response = await Api.get<{
      message: string;
      message_Id: string;
      succeeded: boolean;
      data: Object;
    }>('/search/movie' + '?query=' + {keyword}, {
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
