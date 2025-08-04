import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { IMovieProps } from './interfaces';
import { Dimensions, ImageBackground, StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { PlayIcon, PlusIcon } from '../../components/Icons/Icons';
import MovieReviewsAPi, { IResults } from '../../api/MovieReviews.Api';
import axios, { Canceler } from 'axios';
import Button from '../../components/Button/Button';
import ReviewItem from '../../components/Reviews/ReviewItem';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const Movie: IMovieProps = function Movie({navigation,route: {params : {movieItem}}}){
    const cancelHttp = useRef<Canceler>();
    const [reviews, setReviews] = useState<IResults[]>();
    const imageBaseURL = 'https://image.tmdb.org';

    const MovieReviews = useCallback( async () =>{
        const response = await MovieReviewsAPi(movieItem.id,
            {cancelToken: new axios.CancelToken(c => (cancelHttp.current = c))},
          );
          if (!response){
            return;
          }
          if (!response.data){
            return;
          }
          console.log(response.data.results);
         return setReviews(response.data.results);
    }, [movieItem.id]);

    const handlePress = useCallback(()=>{
        return navigation.navigate('MoviePreview',{movie_id: movieItem.id});
    },[movieItem.id, navigation]);

    const handleNavigateToRefreshment = () => {
    navigation.navigate('SeatBooking', {backdrop: imageBaseURL + '/t/p/w500' + movieItem.poster_path});
  };
    useEffect(() => {
      //initialize list
      MovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
        navigation.getParent()?.setOptions({
            headerShown: true,
          });
    },[navigation]);


    return (
        <ScrollView>
            <ImageBackground source={{
          uri: imageBaseURL + '/t/p/w500' + movieItem.poster_path,
        }} resizeMode='cover' style={styles.image}>
                <View style={styles.playButton}>
                <PlayIcon handlePress={handlePress}/>
                </View>
                <View style={styles.plusButton}>
                <PlusIcon />
                </View>
            </ImageBackground>
            <View style={styles.rankDateContainer}>
                <Text style={styles.rankingText}>{movieItem.popularity}</Text>
                <Text style={styles.dateReleasedText}>{movieItem.release_date}</Text>
            </View>
            <View style={styles.synopsisContainer}>
                <Text style={styles.synopsisTitleText}>SYNOPSIS</Text>
                <Text style={styles.synopsisText}>{movieItem.overview}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button onPress={handleNavigateToRefreshment}>Get Tickets</Button>
            </View>
            <View style={styles.reviewsContainer}>
                <Text style={styles.reviewsText}>Reviews</Text>
                <FlatList style={styles.reviewsListContainer} data={reviews} renderItem={({item, index}) => <ReviewItem item={item} index={index} />}
                pagingEnabled/>
            </View>
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
    rankDateContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
    },
    rankingText: {
        flex: 2,
        fontSize: 16,
        fontFamily: 'AcuminRPro',
        color: 'white',
    },
    dateReleasedText: {
        flex: 5,
        fontSize: 16,
        fontFamily: 'AcuminRPro',
        color: 'white',
    },
    synopsisContainer: {
       flex: 1,
        marginHorizontal: 15,
        marginTop: 10,
    },
     synopsisTitleText: {
        fontFamily: 'AcuminRPro',
        fontSize: 20,
        color: 'white',
    },
    synopsisText: {
        fontFamily: 'AcuminRPro',
        fontSize: 16,
        color: 'white',

    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    reviewsContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    reviewsText: {
        fontFamily: 'AcuminRPro',
        fontSize: 20,
        color: 'white',
    },
    reviewsListContainer: {
        marginTop: 10,
    },
});
