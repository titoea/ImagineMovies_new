import { StackScreenProps } from '@react-navigation/stack';
import { IMainStackParamsList } from '../../navigations/interfaces';

export type IMovieProps = React.FC<
  StackScreenProps<IMainStackParamsList, 'Movie'> & {}
>;