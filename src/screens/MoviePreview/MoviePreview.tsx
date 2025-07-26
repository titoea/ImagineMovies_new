import axios, { Canceler } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import Video from 'react-native-video';
import MoviePreviewAPi, { IResults } from '../../api/MoviePreview.Api';
import { IMoviePreviewProps } from './interfaces';
import { View } from 'react-native';

const MoviePreview : IMoviePreviewProps = function MoviePreview({route: {params: {movie_id}}}) {
     const cancelHttp = useRef<Canceler>();
     const [video, setVideo] = useState<IResults[]>();

    const MoviePreview = useCallback( async () =>{
        const response = await MoviePreviewAPi(movie_id,
            {cancelToken: new axios.CancelToken(c => (cancelHttp.current = c))},
          );
          if (!response){
            return;
          }
          if (!response.data){
            return;
          }
          console.log(response.data, movie_id);
         return setVideo(response.data.results);
    }, [movie_id]);

      useEffect(() => {
          //initialize list
          MoviePreview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

    return (
        <View>
            
        </View>
    );
};

export default MoviePreview;
