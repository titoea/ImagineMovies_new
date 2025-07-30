import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { IRefreshmentProps } from './interfaces';
import Card from '../../components/Card/Card';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { RefreshmentData1, RefreshmentData2, RefreshmentData5 } from '../../data/RefreshmentData';
import {useSharedValue } from 'react-native-reanimated';
import Button from '../../components/Button/Button';


const WINDOW_WIDTH = Dimensions.get('window').width;

const Refreshment : IRefreshmentProps = function Refreshment() {
    const [selectedCard, setSelectedCard] = useState<string>();
    const [selectedFoodRefreshment, setSelectedFoodRefreshment] = useState<string>('popcorn');
    const [selectedDrinkRefreshment, setSelectedDrinkRefreshment] = useState<string>('soft drinks');
    const [totalPrice, setTotalPrice] = useState<number>();
    const selectedCardSize = useSharedValue<number>(0);
    const unSelectedCardSize = useSharedValue<number>(0);

    const handlePress = useCallback((id: string) =>{
        setSelectedCard(id);
        selectedCardSize.value = 20;
        unSelectedCardSize.value = 10;
        return null;
    },[selectedCardSize, unSelectedCardSize]);

 return (
    <ScrollView contentContainerStyle={styles.container}>
        <Picker
        selectedValue={selectedFoodRefreshment}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedFoodRefreshment(itemValue)
        }>
        <Picker.Item label="Popcorn" value="popcorn" />
        <Picker.Item label="Hot dog" value="hot dog" />
        <Picker.Item label="Candy" value="candy" />
        <Picker.Item label="Chocolate Bars" value="chocolate bars" />
        </Picker>
        <View style = {styles.refreshment1}>
        <FlatList data={selectedFoodRefreshment === 'popcorn' ? RefreshmentData1 : RefreshmentData2} renderItem={({item, index}) => <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize}/>}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            />
        </View>
         <Picker
        selectedValue={selectedDrinkRefreshment}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedDrinkRefreshment(itemValue)
        }>
        <Picker.Item label="Soft Drink" value="soft drinks" />
        <Picker.Item label="Hot Drinks" value="hot drinks" />
        <Picker.Item label="Water" value="water" />
        </Picker>
        <View>
            <FlatList data={RefreshmentData5} renderItem={({item, index}) => <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize}/>}
            horizontal
            pagingEnabled
            />
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.totalText}>Total: $10.00</Text>
            <Button>Order now</Button>
        </View>
    </ScrollView>
 );
};

export default Refreshment;

const styles = StyleSheet.create({
    container: {
    },
    refreshment1: {
        marginVertical: 20,
    },
    bottomContainer:{
        alignItems: 'center',
        marginVertical: 60,
        marginHorizontal: 20,
    },
    totalText:{
        textAlign:'center',
        marginBottom: 20,
    },
});
