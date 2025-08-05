import React, { useCallback, useContext, useMemo, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { IRefreshmentProps, Item } from './interfaces';
import Card from '../../components/Card/Card';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { RefreshmentData1, RefreshmentData2, RefreshmentData5 } from '../../data/RefreshmentData';
import {useSharedValue } from 'react-native-reanimated';
import Button from '../../components/Button/Button';
import { usePaystack } from 'react-native-paystack-webview';
import UserContext from '../../providers/UserProvider/UserContext';
import EncryptedStorage from 'react-native-encrypted-storage';
import { TicketType } from '../../providers/UserProvider/interfaces';


const WINDOW_WIDTH = Dimensions.get('window').width;

const Refreshment : IRefreshmentProps = function Refreshment({navigation, route}) {
    const [selectedCard, setSelectedCard] = useState<string>();
    const [selectedFoodRefreshment, setSelectedFoodRefreshment] = useState<string>('popcorn');
    const [selectedDrinkRefreshment, setSelectedDrinkRefreshment] = useState<string>('soft drinks');
    const [foodPrice, setFoodPrice] = useState<number>();
    const [drinkPrice, setDrinkPrice] = useState<number>();
    const [drinkToBuy, setDrinkToBuy] = useState<
    {
        id: string,
        type: string,
        name: string,
        price: number,
        quantity: number
    }[]>([]);
    const [foodToBuy, setFoodToBuy] = useState<
    {
        id: string,
        type: string,
        name: string,
        price: number,
        quantity: number
    }[]>([]);
    const selectedCardSize = useSharedValue<number>(0);
    const unSelectedCardSize = useSharedValue<number>(0);
    const {tickets, populateTicketsList} = useContext(UserContext);
    const {popup} = usePaystack();

    const finalTotal = useMemo(() => {
        const total = foodPrice && drinkPrice ? foodPrice + drinkPrice : foodPrice ? foodPrice : drinkPrice ? drinkPrice : 0;
        return total;
    },[drinkPrice, foodPrice]);

    const saveTickets = useCallback(async(ticketData: TicketType[])=>{
        populateTicketsList(ticketData);
        try{
            await EncryptedStorage.setItem('tickets', JSON.stringify(ticketData));
         }catch(error){
            console.log('something went wrong while storing in BookSeats function');
        }
    },[populateTicketsList]);

        const handleSuccess = useCallback(()=>{
            saveTickets([{movieName: route.params.movieDetails.title, movieTime: String(route.params.time), movieDate: String(route.params.date.day) + ' ' + String(route.params.date.date), movieImage: route.params.ticketImage,
    quantity: route.params.seatArray.length}]);

            const refreshmentsToBuy = foodToBuy.concat(drinkToBuy);
            if(refreshmentsToBuy){
               return navigation.navigate('Ticket', {
                seatArray: route.params.seatArray,
                time: route.params.time,
                date: route.params.date,
                ticketImage: route.params.ticketImage,
                refreshmentsToBuy: refreshmentsToBuy,
                amountToPay: finalTotal,
            });
            }
            else{
            return navigation.navigate('Ticket', {
                seatArray: route.params.seatArray,
                time: route.params.time,
                date: route.params.date,
                ticketImage: route.params.ticketImage,
            });
        }
        },[drinkToBuy, finalTotal, foodToBuy, navigation, route.params.date, route.params.movieDetails.title, route.params.seatArray, route.params.ticketImage, route.params.time, saveTickets]);
        const payNow = useCallback((amount?: number) => {
            popup.checkout({
            email: 'titoeffiongakpan.992@gmail.com',
            amount: amount ? amount : 5000,
            reference: 'TXN_1',
            plan: 'PLN_5owgxapjtoezx90',
            invoice_limit: 3,
            metadata: {
                custom_fields: [
                {
                    display_name: 'Order ID',
                    variable_name: 'order_id',
                    value: 'OID1234',
                },
                ],
            },
            onSuccess: handleSuccess,
            onCancel: handleSuccess,
            onLoad: (res) => console.log('WebView Loaded:', res),
            onError: (err) => console.log('WebView Error:', err),
            });
        },[handleSuccess, popup]);

    const handlePress = useCallback((id: string) =>{
        setSelectedCard(id);
        selectedCardSize.value = 20;
        unSelectedCardSize.value = 10;
        return null;
    },[selectedCardSize, unSelectedCardSize]);

    const handleSkip = useCallback(() => {
        payNow();
        },[payNow]);

    const handleOrder = useCallback(()=>{
        payNow(10000);
    },[payNow]);

    const renderFoodItem = useCallback((item, index)=>{
        return  <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize} cummulativeTotalPrice={calculateFoodPrice} refreshmentsPicked={foodSelection}/>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedCard]);

    const renderDrinkItem = useCallback((item, index)=>{
        return <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize} cummulativeTotalPrice={calculateDrinkPrice} refreshmentsPicked={drinkSelection}/>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedCard]);

    const calculateFoodPrice = useCallback((data:number)=>{
        setFoodPrice(data);
    },[]);
    const calculateDrinkPrice = useCallback((data:number)=>{
        setDrinkPrice(data);
    },[]);
    const foodSelection = useCallback((data: any[])=>{
        setFoodToBuy(data);
    },[]);
    const drinkSelection = useCallback((data: any[])=>{
        setDrinkToBuy(data);
    },[]);

 return (
    <ScrollView contentContainerStyle={styles.container}>
        <Picker
        selectedValue={selectedFoodRefreshment}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedFoodRefreshment(itemValue)
        }
       style={{backgroundColor: 'black'}}>
        <Picker.Item label="Popcorn" value="popcorn" style={{backgroundColor: 'black', color: 'white'}}/>
        <Picker.Item label="Hot dog" value="hot dog" style={{backgroundColor: 'black', color: 'white'}} />
        <Picker.Item label="Candy" value="candy"style={{backgroundColor: 'black', color: 'white'}}/>
        <Picker.Item label="Chocolate Bars" value="chocolate bars" style={{backgroundColor: 'black', color: 'white'}}/>
        </Picker>
        <View style = {styles.refreshment1}>
        <FlatList data={selectedFoodRefreshment === 'popcorn' ? RefreshmentData1 : RefreshmentData2} renderItem={({item, index}) => <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize} cummulativeTotalPrice={calculateFoodPrice} refreshmentsPicked={foodSelection}/>}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            />
        </View>
         <Picker
        selectedValue={selectedDrinkRefreshment}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedDrinkRefreshment(itemValue)
        }
        style={{backgroundColor: 'black'}}>
        <Picker.Item label="Soft Drink" value="soft drinks" style={{backgroundColor: 'black', color: 'white'}}/>
        <Picker.Item label="Hot Drinks" value="hot drinks" style={{backgroundColor: 'black', color: 'white'}}/>
        <Picker.Item label="Water" value="water" style={{backgroundColor: 'black', color: 'white'}} />
        </Picker>
        <View>
            <FlatList data={RefreshmentData5} renderItem={({item, index}) => <Card item={item} name={item.name} price={item.price} index={index} id={item.id} handlePress={()=>handlePress(item.id)} selectedCard={selectedCard} selectedCardSize={selectedCardSize} unselectedCardSize={unSelectedCardSize} cummulativeTotalPrice={calculateDrinkPrice} refreshmentsPicked={drinkSelection}/>}
            horizontal
            pagingEnabled
            keyExtractor={item => item.id}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.totalText}>Total: {finalTotal.toFixed(2)}</Text>
            <Button onPress={handleOrder}>Order now</Button>
            <Button onPress={handleSkip} style={styles.button}>Skip Refreshment</Button>
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
        color: 'white',
    },
    button: {
        marginTop: 20,
    }
});
