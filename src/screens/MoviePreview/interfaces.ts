import { StackScreenProps } from '@react-navigation/stack';
import { IMainStackParamsList } from '../../navigations/interfaces';

export type IMoviePreviewProps = React.FC<
  StackScreenProps<IMainStackParamsList, 'MoviePreview'> & {}
>;