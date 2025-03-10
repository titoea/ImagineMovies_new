import { MovieSliderType } from "../../data/MovieSliderData"

export type SliderProps = {
    item: MovieSliderType,
    index: number;
};

export type INowShowingSliderItemProps = React.FC<{item : SliderProps; index: number}>;
export type INowShowingSliderProps = React.FC<{}>;