import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import ComingSoonSliderItem from './ComingSoonSliderItem';
import axios, { Canceler } from 'axios';
import { useConfiguration } from '../../providers/ConfigurationProvider/ConfigurationContext';
import ComingSoonAPi, { IResults } from '../../api/ComingSoon.api';


const ComingSoonSlider = function ComingSoonSlider () {
    const {configuration} = useConfiguration();
    const cancelHttp = useRef<Canceler>();
    const [list, setList] = useState<IResults[]>();
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const interval = 2000;

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
          if (list){
            const timer = setInterval(() => {
              const nextIndex = (currentIndex + 1) % list?.length;
              setCurrentIndex(nextIndex);
              if(flatListRef){
              flatListRef?.current?.scrollToIndex({index: nextIndex, animated: true});
             }
            }, interval);
            return () => clearInterval(timer);
          }
        },[currentIndex, list]);
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
            pagingEnabled
            ref={flatListRef}
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
