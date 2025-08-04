import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import SubMovieCard from '../../components/SubMovieCard/SubMovieCard';
import SearchMoviesAPi, { IResults } from '../../api/SearchMovies.api';
import InputHeader from '../../components/InputHeader/InputHeader';
import axios, { Canceler } from 'axios';

const {width, height} = Dimensions.get('screen');
const imageBaseURL = 'https://image.tmdb.org';

const Search = ({navigation}: any) => {
  const [searchList, setSearchList] = useState<IResults[]>();
   const cancelHttp = useRef<Canceler>();

    const searchMovies = useCallback(async (name:string) => {
      const response = await SearchMoviesAPi(name, {cancelToken: new axios.CancelToken(c => (cancelHttp.current = c))});
      if (!response){
        return;
      }
      if (!response.data){
        return;
      }
      return setSearchList(response.data.results);
    },[]);


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMovies} />
            </View>
          }
          contentContainerStyle={styles.centerContainer}
          renderItem={({item, index}) => (
            <SubMovieCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('Movie', {movieItem: item});
              }}
              cardWidth={width / 2 - 12 * 2}
              title={item.original_title}
              imagePath={imageBaseURL +  '/t/p/w500' + item.poster_path}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  InputHeaderContainer: {
    display: 'flex',
    marginHorizontal: 36,
    marginTop: 28,
    marginBottom: 28 - 12,
  },
  centerContainer: {
    alignItems: 'center',
  },
});

export default Search;