import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { INowShowingSliderItemProps } from './interfaces';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IMainStackParamsList } from '../../navigations/interfaces';

const WINDOW_WIDTH = Dimensions.get('window').width;

const NowShowingSliderItem : INowShowingSliderItemProps = function NowShowingSliderItem({item}) {
    const navigation = useNavigation<StackNavigationProp<IMainStackParamsList>>();
    return (
        <Pressable onPress={() => navigation.navigate('Movie', {item})}>
        <View style={styles.itemContainer}>
            <Image source={{
          uri: '',
        }}style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        </Pressable>
    );
};

export default NowShowingSliderItem;

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: WINDOW_WIDTH,
    },
    image: {
        width: 200,
        height: 300,
    },
    title: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
    },
});
