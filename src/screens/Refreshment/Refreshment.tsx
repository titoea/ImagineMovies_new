import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { IRefreshmentProps } from './interfaces';
import Card from '../../components/Card/Card';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { RefreshmentData1, RefreshmentData2, RefreshmentData5 } from '../../data/RefreshmentData';


const WINDOW_WIDTH = Dimensions.get('window').width;

const Refreshment : IRefreshmentProps = function Refreshment() {
    const [selectedFoodRefreshment, setSelectedFoodRefreshment] = useState<string>('popcorn');
    const [selectedDrinkRefreshment, setSelectedDrinkRefreshment] = useState<string>('soft drinks');
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
        <FlatList data={selectedFoodRefreshment === 'popcorn' ? RefreshmentData1 : RefreshmentData2} renderItem={({item, index}) => <Card name={item.name} price={item.price} index={index} id={item.id}/>}
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
            <FlatList data={RefreshmentData5} renderItem={({item, index}) => <Card name={item.name} price={item.price} index={index} />}
            horizontal
            pagingEnabled
            />
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
    }
})
