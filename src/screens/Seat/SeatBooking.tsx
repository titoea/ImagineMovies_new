import React, {useCallback, useState} from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioIcon, SeatIcon } from '../../components/Icons/Icons';

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
    const [dateArray, setDateArray] = useState<string[]>(generateDate());
    const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
    const [price, setPrice] = useState<number>(0);

    const [twoDseatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
    const [selectedSeatArray, setSelectedSeatArray] = useState([]);
    const [selectedaTimeIndex, setSelectedTimeIndex] = useState<any>();

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
                        <RadioIcon style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Available</Text>
                    </View>
            </View>

                    <View style={styles.radioContainer}>
                        <RadioIcon color={'grey'} style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Taken</Text>
                    </View>


                    <View style={styles.radioContainer}>
                        <RadioIcon color="yellow" style={styles.radioIcon}/>
                        <Text style={styles.radioText}>Selected</Text>
                    </View>

        </ScrollView>
    );
};

export default SeatBooking;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#e4eef5',
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
        color: 'black',
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
    },

});
