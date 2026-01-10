import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IMainStackParamsList, ITabStackParamsList } from '../../navigations/interfaces';

export type IRefreshmentProps = React.FC<
  NativeStackScreenProps<IMainStackParamsList, 'Refreshment'> & {}
>;

export type Item = {
  id: string,
  type: string,
  name: string,
  price: string,
  quantity: number,
};
