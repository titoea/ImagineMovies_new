import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SliderProps } from './interfaces';
import LinearGradient from 'react-native-linear-gradient';

const WINDOW_WIDTH = Dimensions.get('window').width;

const ComingSoonSliderItem = function ComingSoonSliderItem({item, index}: SliderProps) {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image}/>
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
        width: 100,
        height: 150,
    },
});
