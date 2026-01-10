import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ticket from '../../components/Ticket/Ticket';
import { ITicketListProps } from './interfaces';
import { TicketType } from '../../providers/UserProvider/interfaces';
import EncryptedStorage from 'react-native-encrypted-storage';

const TicketList:ITicketListProps = function TicketList(){
    const [ticketList, setTicketList] = useState<TicketType[]>([]);

    const getTickets = useCallback(async() =>{
        try{
            const tickets = await EncryptedStorage.getItem('tickets');
            if (tickets !== undefined && tickets !== null){
                setTicketList(JSON.parse(tickets));
            }
            }catch(error){
                console.error('Something went wrong while getting data ', error);
            }
        },[]);
    useEffect(()=>{
        getTickets();
    },[getTickets]);
    return(
        <ScrollView>

        <View>
            <FlatList data={ticketList} renderItem={({item, index}) => <Ticket item={item} index={index} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ticketContainer}
            contentContainerStyle={styles.ticketContainer}
            pagingEnabled
            />
        </View>
        </ScrollView>
    );
};
export default TicketList;

const styles = StyleSheet.create({
    container: {},
    ticketContainer: {
        marginRight: 20,
    },
});
