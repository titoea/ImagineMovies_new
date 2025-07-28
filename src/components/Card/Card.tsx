import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddLargeIcon, CokeIcon, FantaIcon, HotDogIcon, PepsiIcon, PopcornLargeIcon, PopcornMediumIcon, PopcornSmallIcon } from '../Icons/Icons';
import { ICardProps, cardName } from './interfaces';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Card : ICardProps = function Card({name, price, index, id}){
    const selectedCardSize = useSharedValue<number>(50);
    const unSelectedCardSize = useSharedValue<number>(50);

    const animatedProps = useAnimatedStyle(() => ({
        paddingVertical: withTiming(selectedCardSize.value),
        paddingHorizontal: withTiming(selectedCardSize.value),
}));
    const handlePress = useCallback(()=>{
        selectedCardSize.value += 30;
        unSelectedCardSize.value -= 20;
        return null;
    },[selectedCardSize, unSelectedCardSize]);

    return (
        <Animated.View style={styles.container} animatedProps={animatedProps}>
            <View style={styles.mainIconStyle}>
                {name === cardName.popcornLarge ? <PopcornLargeIcon size={150}/> : name === cardName.popcornMedium ? <PopcornMediumIcon size={150}/> :
                name === cardName.popcornSmall ? <PopcornSmallIcon size={150}/> : name === cardName.fanta ? <FantaIcon size={150}/> : name === cardName.coke 
                ? <CokeIcon size={150}/> : name === cardName.pepsi ? <PepsiIcon size={150}/> : name === cardName.hotdogLarge ? <HotDogIcon size={150} /> : name === cardName.hotdogMedium ? <HotDogIcon size={150}/> : <HotDogIcon size={150}/> }
            </View>
            <View style= {styles.priceAdd}>
                <Text>${price}</Text>
                <AddLargeIcon size={20} handlePress={handlePress}/>
            </View>
        </Animated.View>
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
        paddingVertical: 50,
    },
   mainIconStyle: {
    borderBottomWidth: 2,
   },
   priceAdd: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
});
