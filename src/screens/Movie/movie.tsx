import React, { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { IMovieProps } from './interfaces';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { PlayIcon, PlusIcon } from '../../components/Icons/Icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const Movie: IMovieProps = function Movie({navigation,route: {params : {item}}}){
    useEffect(()=>{
        navigation.getParent()?.setOptions({
            headerShown: false,
          });
    },[navigation]);

    return (
        <ScrollView>
            <ImageBackground source={item.image} resizeMode='cover' style={styles.image}>
                <View style={styles.playButton}>
                <PlayIcon />
                </View>
                <View style={styles.plusButton}>
                <PlusIcon />
                </View>
            </ImageBackground>
        </ScrollView>
    );

};

export default Movie;

const styles =  StyleSheet.create({
    image: {
        flex: 1,
        height: WINDOW_HEIGHT * 0.6,
        width: WINDOW_WIDTH,
        flexDirection: 'row',
    },
    playButton: {
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    plusButton: {
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 10,
        marginLeft: 'auto',
    },
});