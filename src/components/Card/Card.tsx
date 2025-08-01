import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddLargeIcon, CokeIcon, FantaIcon, HotDogIcon, PepsiIcon, PopcornLargeIcon, PopcornMediumIcon, PopcornSmallIcon, RemoveIcon } from '../Icons/Icons';
import { ICardProps, cardName } from './interfaces';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RefreshmentDataForCard } from '../../data/RefreshmentData';
import { IRefreshmentDataForCardProps } from '../../data/interfaces';

const Card : ICardProps = function Card({
    item,
    name,
    price,
    index,
    id,
    handlePress,
    selectedCard,
    selectedCardSize,
    unselectedCardSize,
    cummulativeTotalPrice,
}){
    const [quantity, setquantity] = useState<number>(1);
    const [refreshmentPrices, setRefreshmentPrices] = useState<IRefreshmentDataForCardProps>(RefreshmentDataForCard);

    const animatedProps = useAnimatedStyle(() => ({
        padding: withTiming(selectedCard === id ? selectedCardSize.value : unselectedCardSize.value),
    }));

    const handleAdd = useCallback(() =>{
        setRefreshmentPrices(prevItems => prevItems.map(mapItem => mapItem.id === selectedCard ? {...mapItem, quantity : quantity + 1 } : mapItem));
        setquantity(quantity + 1);
        return null;
    },[quantity, selectedCard]);

    const handleRemove = useCallback(() => {
        if(quantity <= 0 ){
            return;
        }
        setquantity(quantity - 1);
         setRefreshmentPrices(prevItems => prevItems.map(mapItem => mapItem.id === selectedCard ? {...mapItem, quantity : quantity - 1 } : mapItem));
        return null;
    }, [quantity, selectedCard]);

    const totalPrice = useMemo(() =>{
        let total = 0;
        refreshmentPrices.forEach((refreshmentObj, index) =>{
            total = total + refreshmentObj.quantity * refreshmentObj.price;
        });
        return total;
    },[refreshmentPrices]);

    const sendPrice = useCallback(()=>{
        cummulativeTotalPrice(totalPrice);
    },[cummulativeTotalPrice, totalPrice]);

    useEffect(()=>{
        sendPrice();
        console.log(refreshmentPrices);
    },[refreshmentPrices, sendPrice, totalPrice]);

    return (
        <View style={styles.container} >
            <Animated.View style={styles.mainIconStyle} animatedProps={animatedProps}>
                <Text style={styles.text}>{name}</Text>
                {name === cardName.popcornLarge ? <PopcornLargeIcon size={150}/> : name === cardName.popcornMedium ? <PopcornMediumIcon size={150}/> :
                name === cardName.popcornSmall ? <PopcornSmallIcon size={150}/> : name === cardName.fanta ? <FantaIcon size={150}/> : name === cardName.coke
                ? <CokeIcon size={150}/> : name === cardName.pepsi ? <PepsiIcon size={150}/> : name === cardName.hotdogLarge ? <HotDogIcon size={150} /> : name === cardName.hotdogMedium ? <HotDogIcon size={150}/> : <HotDogIcon size={150}/> }
            </Animated.View>
            <View style= {selectedCard !== id ? styles.priceAdd : styles.priceAddRemove }>
                <Text>${price}</Text>
                {selectedCard === id ? <RemoveIcon size={20} handlePress={handleRemove}/> : null}
                {selectedCard === id ? <Text>{quantity}</Text> : null}
                {selectedCard === id  ? <AddLargeIcon size={20} handlePress={handleAdd}/> : <AddLargeIcon size={20} handlePress={handlePress}/>}
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#e4eef5',
        flex: 1,
        marginHorizontal: 30,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
   mainIconStyle: {
    borderBottomWidth: 2,
   },
   text:{
    textAlign: 'center',
    marginVertical: 5,
   },
   priceAdd: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   priceAddRemove: {
     marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   },
});
