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
    refreshmentsPicked,
}){
    const [quantity, setquantity] = useState<number>(0);
    const [refreshmentDetails, setRefreshmentDetails] = useState<IRefreshmentDataForCardProps>(RefreshmentDataForCard);

    const animatedProps = useAnimatedStyle(() => ({
        padding: withTiming(selectedCard === id ? selectedCardSize.value : unselectedCardSize.value),
    }));

    const handleAdd = useCallback(() =>{
        setRefreshmentDetails(prevItems => prevItems.map(mapItem => mapItem.id === selectedCard ? {...mapItem, quantity : quantity + 1 } : mapItem));
        setquantity(quantity + 1);
        return null;
    },[quantity, selectedCard]);

    const handleRemove = useCallback(() => {
        const cantRemove = refreshmentDetails.find(refreshments => refreshments.id === selectedCard ? refreshments.quantity
            === 0 : false
        );
        if(cantRemove){
            return;
        }
        setquantity(quantity - 1);
         setRefreshmentDetails(prevItems => prevItems.map(mapItem => mapItem.id === selectedCard ? {...mapItem, quantity : quantity - 1 } : mapItem));
        return null;
    }, [quantity, refreshmentDetails, selectedCard]);

    const totalPrice = useMemo(() =>{
        let total = 0;
        refreshmentDetails.forEach((refreshmentObj, index) =>{
            total = total + refreshmentObj.quantity * refreshmentObj.price;
        });
        return total;
    },[refreshmentDetails]);

    const sendPrice = useCallback(()=>{
        cummulativeTotalPrice(totalPrice);
    },[cummulativeTotalPrice, totalPrice]);

    useEffect(()=>{
        sendPrice();
    },[refreshmentDetails, sendPrice, totalPrice]);

    useEffect(() =>{
        const finalPickedRefreshments = refreshmentDetails.filter(refreshments => refreshments.quantity > 0);
        refreshmentsPicked(finalPickedRefreshments);
    },[refreshmentDetails, refreshmentsPicked]);
    return (
        <View style={styles.container} >
            <Animated.View style={styles.mainIconStyle} animatedProps={animatedProps}>
                <Text style={styles.text}>{name}</Text>
                {name === cardName.popcornLarge ? <PopcornLargeIcon size={150}/> : name === cardName.popcornMedium ? <PopcornMediumIcon size={150}/> :
                name === cardName.popcornSmall ? <PopcornSmallIcon size={150}/> : name === cardName.fanta ? <FantaIcon size={150}/> : name === cardName.coke
                ? <CokeIcon size={150}/> : name === cardName.pepsi ? <PepsiIcon size={150}/> : name === cardName.hotdogLarge ? <HotDogIcon size={150} /> : name === cardName.hotdogMedium ? <HotDogIcon size={150}/> : <HotDogIcon size={150}/> }
            </Animated.View>
            <View style= {selectedCard !== id ? styles.priceAdd : styles.priceAddRemove }>
                <Text style={styles.priceText}>${price}</Text>
                {selectedCard === id ? <RemoveIcon size={20} handlePress={handleRemove}/> : null}
                {selectedCard === id ? <Text style={styles.quantityText}>{quantity}</Text> : null}
                {selectedCard === id  ? <AddLargeIcon size={20} handlePress={handleAdd}/> : <AddLargeIcon size={20} handlePress={handlePress}/>}
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'd0f0f4d',
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
    color: 'white',
   },
   priceText: {
    color: 'white',
   },
   quantityText: {
    color: 'white',
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
