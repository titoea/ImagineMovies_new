//import { MovieSliderType } from "../../data/MovieSliderData"

export type movieItemProps = {
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

export type INowShowingSliderItemProps = React.FC<{item : movieItemProps}>;
export type INowShowingSliderProps = React.FC<{}>;