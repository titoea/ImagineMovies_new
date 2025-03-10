import { MovieSliderType } from '../data/MovieSliderData';

export type IOnboardingStackParamsList = {
  Landing: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type IMainStackParamsList = {
  Movie: {
    item: MovieSliderType;
  };
} & ITabStackParamsList;

export type ITabStackParamsList = {
  Home: undefined;
}
