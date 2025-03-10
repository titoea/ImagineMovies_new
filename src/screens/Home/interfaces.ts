import { StackScreenProps } from '@react-navigation/stack';
import { ITabStackParamsList } from '../../navigations/interfaces';

export type IHomeProps = React.FC<
  StackScreenProps<ITabStackParamsList, 'Home'> & {}
>;