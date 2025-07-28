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
export type ICardProps = React.FC<{name: string, price: string, index: number, id: string}>;
