import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SliderProps } from './interfaces';
import LinearGradient from 'react-native-linear-gradient';

const WINDOW_WIDTH = Dimensions.get('window').width;

const ComingSoonSliderItem = function ComingSoonSliderItem({item, index}: SliderProps) {
    const imageBaseURL = 'https://image.tmdb.org';
    return (
        <View style={styles.itemContainer}>
            <Image source={{
          uri: imageBaseURL + '/t/p/w500' + item.poster_path,
        }} style={styles.image}/>
        </View>
    );
};

export default ComingSoonSliderItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    image: {
        borderRadius: 10,
        width: 100,
        height: 180,
    },
});
