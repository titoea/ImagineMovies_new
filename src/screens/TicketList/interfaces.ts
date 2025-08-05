import { StackScreenProps } from '@react-navigation/stack';
import { ITabStackParamsList } from '../../navigations/interfaces';

export type ITicketListProps = React.FC<
StackScreenProps<ITabStackParamsList, 'TicketList'> & {}
>;
