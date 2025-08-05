import React, { useCallback, useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import LinearGradient from 'react-native-linear-gradient';
import { ClockIcon, CokeIcon, FantaIcon, HotDogIcon, PepsiIcon, PopcornLargeIcon, PopcornMediumIcon, PopcornSmallIcon } from '../../components/Icons/Icons';
import Button from '../../components/Button/Button';
import { ITicketProps } from './interfaces';
import { cardName } from '../../components/Card/interfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

const Ticket: ITicketProps = function Ticket({navigation, route} : any){
    const [ticketData, setTicketData] = useState<any>(route.params);
    const goToHome = useCallback(()=>{
        CommonActions.reset({
            index: 0,
            routes: [
            { name: 'Home' },
            ],
         });
    },[]);
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
    console.log(ticketData.refreshmentsToBuy);
    return(
        <ScrollView>
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
            {ticketData.refreshmentsToBuy?.map((refreshments, index) =>(
                <View key={index} style={styles.refreshmentsContainer}>
                    <View>
                    <Text style={styles.refreshmentText}>{refreshments.name}</Text>
                    {refreshments.name === cardName.popcornLarge ? <PopcornLargeIcon size={40}/> : refreshments.name === cardName.popcornMedium ? <PopcornMediumIcon size={40}/> :
                                    refreshments.name === cardName.popcornSmall ? <PopcornSmallIcon size={40}/> : refreshments.name === cardName.fanta ? <FantaIcon size={40}/> : refreshments.name === cardName.coke
                                    ? <CokeIcon size={40}/> : refreshments.name === cardName.pepsi ? <PepsiIcon size={40}/> : refreshments.name === cardName.hotdogLarge ? <HotDogIcon size={40} /> : refreshments.name === cardName.hotdogMedium ? <HotDogIcon size={40}/> : <HotDogIcon size={40}/> }
                    </View>
                    <Text style={styles.refreshmentText}>x{refreshments.quantity}</Text>
                </View>
        ))}
            <Image source={require('../../assets/images/barcode.png')} style={styles.barcodeImage}/>
            </View>
            <View style={styles.buttonContainer}>
            <Button onPress={goToHome}>Go To Home</Button>
            </View>
        </View>
        </ScrollView>
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
  refreshmentsContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  refreshmentText: {
    color: 'white',
  },
});
