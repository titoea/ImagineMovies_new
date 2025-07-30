import { SharedValue } from "react-native-reanimated";
import { Item } from "../../screens/Refreshment/interfaces";
export enum cardName {
    popcornLarge = 'POPCORNLARGE',
    popcornMedium = 'POPCORNMEDIUM',
    popcornSmall = 'POPCORNSMALL',
    hotdogLarge = 'HOTDOGLARGE',
    hotdogMedium= 'HOTDOGMEDIUM',
    hotdogSmall='HOTDOGSMALL',
    fanta = 'FANTA',
    coke = 'COKE',
    pepsi = 'PEPSI'
}
export type ICardProps = React.FC<{item:Item, name: string, price: string, index: number, id: string, handlePress: () => null, 
    selectedCard: string | undefined, selectedCardSize: SharedValue<number>, unselectedCardSize: SharedValue<number>}>;
