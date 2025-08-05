import { IMainStackParamsList } from '../../navigations/interfaces';
import { StackScreenProps } from '@react-navigation/stack';

export type ITicketProps = React.FC<
  StackScreenProps<IMainStackParamsList, 'Ticket'> & {}
>;
