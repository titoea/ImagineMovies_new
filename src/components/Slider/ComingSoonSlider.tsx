import { FlatList, StyleSheet, View } from 'react-native';
import { MovieSlider } from '../../data/MovieSliderData';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import ComingSoonSliderItem from './ComingSoonSliderItem';
import axios, { Canceler } from 'axios';
import { useConfiguration } from '../../providers/ConfigurationProvider/ConfigurationContext';
import ComingSoonAPi, { IResults } from '../../api/ComingSoon.api';


const ComingSoonSlider = function ComingSoonSlider () {
    const {configuration} = useConfiguration();
    const cancelHttp = useRef<Canceler>();
    const [list, setList] = useState<IResults[]>();

    const ComingSoonData = useCallback( async () =>{
        const response = await ComingSoonAPi({
            cancelToken: new axios.CancelToken(c => (cancelHttp.current = c)),
          },);
          if (!response){
            return;
          }
          if (!response.data){
            return;
          }
         return setList(response.data.results);
    }, []);
    useEffect(() => {
          //initialize list
          ComingSoonData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

    return (
        <View>
            <FlatList data={list} renderItem={({item, index}) => <ComingSoonSliderItem item={item} index={index} />}
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
