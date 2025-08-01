import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ITabStackParamsList } from '../../navigations/interfaces';

export type IRefreshmentProps = React.FC<
  NativeStackScreenProps<ITabStackParamsList, 'Refreshment'> & {}
>;

export type Item = {
  id: string,
  type: string,
  name: string,
  price: string,
  quantity: number,
};
