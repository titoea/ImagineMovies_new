import { StackScreenProps } from "@react-navigation/stack";
import { ITabStackParamsList } from "../../navigations/interfaces";

export type IAccountProps = React.FC<
  StackScreenProps<ITabStackParamsList, 'Account'> & {}
>;
