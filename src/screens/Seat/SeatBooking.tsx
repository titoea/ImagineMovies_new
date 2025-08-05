import React, {useCallback, useState} from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioIcon, SeatIcon } from '../../components/Icons/Icons';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import EncryptedStorage from 'react-native-encrypted-storage';

const timeArray: string[] = [
    '10:30',
    '12:30',
    '14:30',
    '15:00',
    '19:30',
    '21.00',
];
//'TabStack', {screen: 'Refreshment'}
const generateDate = (): string[] => {
    const date = new Date();
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekdays = [];
    for(let i = 0; i < 7; i++){
        let tempDate = {
            date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
            day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
        };
        weekdays.push(tempDate);
    }
    return weekdays;
};
const generateSeats = () =>{
    let numRow = 8;
    let numColumn = 3;
    let rowArray = [];
    let start = 1;
    let reachnine =  false;
    for (let i = 0; i < numRow; i++){
        let columnArray = [];
        for (let j = 0; j < numColumn; j++){
            let seatObject = {
                number : start,
                taken : Boolean(Math.round(Math.random())),
                selected: false,
            };
            columnArray.push(seatObject);
            start++;
        }
        if (i === 3){
            numColumn += 2;
        }
        if (numColumn < 9 && !reachnine){
            numColumn += 2;
        } else{
            reachnine =  true;
            numColumn -= 2;
        }
        rowArray.push(columnArray);
    }
    return rowArray;
};
const SeatBooking = function SeatBooking({
    navigation,
    route: {params: {backdrop}},
}){
    const [dateArray, setDateArray] = useState<any[]>(generateDate());
    const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
    const [price, setPrice] = useState<number>(0);

    const [twoDseatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
    const [selectedSeatArray, setSelectedSeatArray] = useState([]);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();

    const selectSeatArray = useCallback((index: number, subindex: number, num: number)=>{
        if (!twoDseatArray[index][subindex].taken) {
        let array: any = [...selectedSeatArray];
        let temp = [...twoDseatArray];
        temp[index][subindex].selected = !temp[index][subindex].selected;
            if (!array.includes(num)) {
                array.push(num);
                setSelectedSeatArray(array);
            } else {
                const tempindex = array.indexOf(num);
                if (tempindex > -1) {
                array.splice(tempindex, 1);
                setSelectedSeatArray(array);
                }
            }
            setPrice(array.length * 5.0);
            setTwoDSeatArray(temp);
        }
    },[selectedSeatArray, twoDseatArray]);

    const BookSeats = useCallback(async() =>{
        if(selectedSeatArray.length !== 0 && timeArray[selectedTimeIndex] !== undefined && dateArray[selectedDateIndex] !== undefined){
            try{
                await EncryptedStorage.setItem('ticket', JSON.stringify({
                    seatArray: selectedSeatArray,
                    time: timeArray[selectedTimeIndex],
                    date: dateArray[selectedDateIndex],
                    ticketImage: backdrop,
                }));
            }catch(error){
                console.log('something went wrong while storing in BookSeats function');
            }
             navigation.navigate('Refreshment', {
            seatArray: selectedSeatArray,
            time: timeArray[selectedTimeIndex],
            date: dateArray[selectedDateIndex],
            ticketImage: backdrop,
        });
        }else{
            ToastAndroid.showWithGravity("Please select seats, Date and Time of the movie", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    },[backdrop, dateArray, navigation, selectedDateIndex, selectedSeatArray, selectedTimeIndex]);
    return(
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View>
                <ImageBackground source={{uri: backdrop}} style={styles.imageBG}>
                    <LinearGradient colors={['#bce8fc54', '#5e7c8a54', '#080c0ea8']} style={styles.linearGradient}/>
                </ImageBackground>
                <Text style={styles.screenText}>Screen this side</Text>
            </View>
            <View style={styles.seatContainer}>
                <View style={styles.containerGap20}>
                    {
                        twoDseatArray.map((item, index)=> {
                            return(
                                <View key={index} style={styles.seatRow}>
                                    {item?.map((subitem, subIndex)=>{
                                        return (<TouchableOpacity key={subitem.number} onPress={() => selectSeatArray(index, subIndex, subitem.number)}>
                                            <SeatIcon size={24} color={subitem.taken ? 'grey' : subitem.selected ? 'yellow' : 'white'} style={styles.seatIcon}/>
                                        </TouchableOpacity>);
                                    })}
                                </View>
                            );
                        })
                    }
                </View>
            </View>
            <View style={styles.seatRadioContainer}>
                    <View style={styles.radioContainer}>
                        <RadioIcon size={20} color='white' style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Available</Text>
                    </View>
                    <View style={styles.radioContainer}>
                        <RadioIcon size={20} color={'grey'} style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Taken</Text>
                    </View>


                    <View style={styles.radioContainer}>
                        <RadioIcon  size={20} color="yellow" style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Selected</Text>
                    </View>
            </View>
            <View>
                <FlatList showsHorizontalScrollIndicator={false} bounces={false} data={dateArray} keyExtractor={item => item.date} horizontal contentContainerStyle={styles.containerGap24}
                    renderItem={({item, index}) => {
                        return (<TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                            <View style={[styles.dateContainer, index === 0 ? {marginLeft: 24} : index === dateArray.length - 1 ? {marginRight: 24} : index === selectedDateIndex ? {backgroundColor: 'orange'} : {}]}>
                                <Text style={styles.dateText}>{item.date}</Text>
                                <Text style={styles.dayText}>{item.day}</Text>
                            </View>
                        </TouchableOpacity>);
                    }}/>
            </View>
            <View style={styles.outerContainer}>
        <FlatList
          data={timeArray}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.containerGap24}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => setSelectedTimeIndex(index)}>
                <View
                  style={[
                    styles.timeContainer,
                    index === 0
                      ? {marginLeft: 24}
                      : index === dateArray.length - 1
                      ? {marginRight: 24}
                      : {},
                    index === selectedTimeIndex
                      ? {backgroundColor: 'orange'}
                      : {},
                  ]}>
                  <Text style={styles.timeText}>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.buttonPriceContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPriceText}>Total Price</Text>
          <Text style={styles.price}>$ {price}.00</Text>
        </View>
        <Button onPress={BookSeats}>
          <Text style={styles.buttonText}>Buy Tickets</Text>
        </Button>
      </View>
        </ScrollView>
    );
};

export default SeatBooking;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'black',
    },
    imageBG: {
       width: '100%',
       aspectRatio: 3072 / 1727,
    },
    linearGradient: {
        height: '100%',
    },
    screenText: {
        textAlign: 'center',
        fontFamily: 'AcuminRPro',
        fontSize: 12,
        color: 'white',
    },
    seatContainer: {
        marginVertical: 20,
    },
    containerGap20: {
        gap: 20,
    },
    seatRow: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    },
    seatIcon: {
    },
    seatRadioContainer: {
        marginTop: 36,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    radioContainer: {
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
    },
    radioIcon: {
    },
    radioText: {
        fontFamily: 'AcuminRPro',
        fontSize: 12,
        marginHorizontal: 5,
        color: 'white',
    },
    containerGap24:{
        gap: 24,
    },
    dateContainer: {
        width: 10 * 7,
        height: 10 * 10,
        borderRadius: 70,
        backgroundColor: '#a3cdebf5',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    dateText: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 24,
        color: 'white',
    },
    dayText: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 12,
        color: 'white',
    },
    outerContainer: {
    marginVertical: 24,
    },
    timeContainer: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor:' #a3cdebf5',
        alignItems: 'center',
        justifyContent: 'center',
    },
  timeText: {
    fontFamily: 'BebasNeue-Regular' ,
    fontSize: 14,
    color: 'white',
  },
  buttonPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  priceContainer: {
    alignItems: 'center',
  },
  totalPriceText: {
    fontFamily: 'AcuminRPro',
    fontSize: 14,
    color: 'white',
  },
  price: {
    fontFamily: 'AcuminRPro',
    fontSize: 24,
    color: 'white',
  },
  buttonText: {
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 10,
    fontFamily: 'AcuminRPro',
    fontSize: 16,
    color: 'white',
  },
});
