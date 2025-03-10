import { FlatList, StyleSheet, View } from 'react-native';
import { MovieSlider } from '../../data/MovieSliderData';
import React from 'react';

import ComingSoonSliderItem from './ComingSoonSliderItem';


const ComingSoonSlider = function ComingSoonSlider () {
    return (
        <View>
            <FlatList data={MovieSlider} renderItem={({item, index}) => <ComingSoonSliderItem item={item} index={index} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingVertical: 5}}
            contentContainerStyle={styles.nowShowingContainer}
            />
        </View>
    );
};

export default ComingSoonSlider;

const styles = StyleSheet.create({
    nowShowingContainer:{
        gap: 10,
        paddingHorizontal: 12,
    },
});
