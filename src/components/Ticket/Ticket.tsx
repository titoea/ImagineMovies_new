import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ITicketProps } from './interfaces';


const width = Dimensions.get('window').width;

const imageBaseURL = 'https://image.tmdb.org';
const Ticket: ITicketProps = function Ticket({item, index}){
    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri: item.movieImage}} width={150} height={200} style={styles.ticketImage}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.movieNameText}>{item.movieName}</Text>
                <View>
                    <Text style={styles.movieDateText}>{item.movieDate}</Text>
                    <Text style={styles.movieTimeText}>{item.movieTime}</Text>
                </View>
            </View>
        </View>
    );
};
export default Ticket;
const styles = StyleSheet.create({
 container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#84849124',
    padding: 20,
    width: width,
 },
 infoContainer: {
    marginLeft: 20,
 },
 ticketImage: {
    borderRadius:20,
 },
 movieNameText: {
    color: 'white',
    fontSize: 20,
 },
 movieDateText: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 20,
    backgroundColor: 'orange',
    borderRadius: 20,
    textAlign: 'center',
    marginVertical: 10,
 },
 movieTimeText: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    textAlign: 'center',
 },
});
