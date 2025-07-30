import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import NowShowingSliderItem from './NowShowingSliderItem';
import { INowShowingSliderProps } from './interfaces';
import NowShowingAPi, {IResults } from '../../api/NowShowing.api';
import axios, { Canceler } from 'axios';
import { useConfiguration } from '../../providers/ConfigurationProvider/ConfigurationContext';

const NowShowingSlider:INowShowingSliderProps = function NowShowingSlider () {
    const {configuration} = useConfiguration();
    const cancelHttp = useRef<Canceler>();
    const [list, setList] = useState<IResults[]>();

    const NowShowingData = useCallback( async () =>{
        const response = await NowShowingAPi({
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
      NowShowingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[list]);

    return (
            <View style={styles.container}>
                <FlatList bounces={false} data={list} renderItem={({item, index}) => <NowShowingSliderItem item={item} index={index} />}
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
    },
});

