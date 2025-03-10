import { FlatList, StyleSheet, View } from 'react-native';
import { MovieSlider } from '../../data/MovieSliderData';
import React from 'react';
import NowShowingSliderItem from './NowShowingSliderItem';
import { INowShowingSliderProps } from './interfaces';



const NowShowingSlider:INowShowingSliderProps = function NowShowingSlider () {
    return (
            <View style={styles.container}>
                <FlatList data={MovieSlider} renderItem={({item, index}) => <NowShowingSliderItem item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled/>
            </View>
    );
};

export default NowShowingSlider;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    }
})

