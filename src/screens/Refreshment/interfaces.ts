import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ITabStackParamsList } from '../../navigations/interfaces';

export type IRefreshmentProps = React.FC<
  NativeStackScreenProps<ITabStackParamsList, 'Refreshment'> & {}
>;
