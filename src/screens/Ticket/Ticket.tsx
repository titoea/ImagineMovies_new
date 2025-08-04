import React, { useCallback, useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import LinearGradient from 'react-native-linear-gradient';
import { ClockIcon } from '../../components/Icons/Icons';
import Button from '../../components/Button/Button';
import { usePaystack } from 'react-native-paystack-webview';

const Ticket = function Ticket({navigation, route} : any){
    const [ticketData, setTicketData] = useState<any>(route.params);
    const {popup} = usePaystack();

    const payNow = useCallback(() => {
        popup.checkout({
        email: 'titoeffiongakpan.992@gmail.com',
        amount: 5000,
        reference: 'TXN_123456',
        plan: 'PLN_ey0ff1wo1ccik22',
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
        onSuccess: (res) => console.log('Success:', res),
        onCancel: () => console.log('User cancelled'),
        onLoad: (res) => console.log('WebView Loaded:', res),
        onError: (err) => console.log('WebView Error:', err),
        });
    },[popup]);
    useEffect(()=>{
         (async ()=>{
            try{
                const ticket = await EncryptedStorage.getItem('ticket');
                if (ticket !== undefined && ticket !== null){
                    setTicketData(JSON.parse(ticket));
                }
            }catch(error){
                console.error('Something went wrong while getting data ', error);
            }
         });
    },[]);
    if (ticketData === undefined || ticketData ===  null){
        return(<View style={styles.container} />);
    }
    return(
        <View style={styles.ticketContainer}>
            <ImageBackground source={{uri: ticketData?.ticketImage}} style={styles.ticketBGImage}>
                <LinearGradient colors ={['#ce7c0ff5','#ce7c0f11']} style={styles.linearGradient}>
                     <View
                        style={[
                        styles.blackCircle,
                        {position: 'absolute', bottom: -40, left: -40}]} />
                        <View
                            style={[
                            styles.blackCircle,
                            {position: 'absolute', bottom: -40, right: -40},
              ]} />
                </LinearGradient>
            </ImageBackground>
            <View style={styles.linear} />
            <View style={styles.ticketFooter}>
                <View
                    style={[
                    styles.blackCircle,
                    {position: 'absolute', top: -40, left: -40},
                    ]} />
                <View
                    style={[
                    styles.blackCircle,
                    {position: 'absolute', top: -40, right: -40},
                    ]} />
        <View style={styles.ticketDateContainer}>
            <View>
                <Text style={styles.dateTitle}>{ticketData?.date.date}</Text>
                <Text style={styles.subTitle}>{ticketData?.date.day}</Text>
            </View>
            <View>
                <ClockIcon size={20} />
                <Text style={styles.subTitle}>{ticketData?.time}</Text>
            </View>
            </View>
            <View style={styles.ticketSeatContainer}>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subHeading}>Hall</Text>
                    <Text style={styles.subTitle}>02</Text>
                </View>
                 <View style={styles.subtitleContainer}>
                    <Text style={styles.subHeading}>Row</Text>
                    <Text style={styles.subTitle}>04</Text>
                </View>
                 <View style={styles.subtitleContainer}>
                    <Text style={styles.subHeading}>Seats</Text>
                    <Text style={styles.subTitle}>{ticketData?.seatArray.slice(0,3).map((item: any, index: number, arr: any) => {
                    return item + (index === arr.length - 1 ? '' : ', '); })}
                    </Text>
                </View>
            </View>
            <Image source={require('../../assets/images/barcode.png')} style={styles.barcodeImage}/>
            </View>
            <View style={styles.buttonContainer}>
            <Button onPress={payNow}>Pay</Button>
            <Button style={ styles.button} onPress={() => navigation.goBack()}>Go back</Button>
            </View>
        </View>
    );
};

export default Ticket;

const styles = StyleSheet.create({
 container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
 },
 ticketContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  ticketBGImage: {
    alignSelf: 'center',
    width: 300,
    aspectRatio: 200 / 300,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: '100%',
  },
  linear: {
    borderTopColor: 'black',
    borderTopWidth: 3,
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#ce7c0ff5',
    borderStyle: 'dashed',
  },
  ticketFooter: {
    backgroundColor: '#ce7c0ff5',
    width: 300,
    alignItems: 'center',
    paddingBottom: 36,
    alignSelf: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  ticketDateContainer: {
    flexDirection: 'row',
    gap: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  ticketSeatContainer: {
    flexDirection: 'row',
    gap: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dateTitle: {
    fontFamily: 'BebasNeue-Regular',
    fontSize:24,
    color: 'white',
  },
  subTitle: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 14,
    color: 'white',
  },
  subHeading: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 18,
    color: 'white',
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: 24,
    color: 'white',
    paddingBottom: 10,
  },
  barcodeImage: {
    height: 50,
    aspectRatio: 158 / 52,
  },
  blackCircle: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: 'black',
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    marginTop : 10,
  },
});
