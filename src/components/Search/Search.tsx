import React, { useCallback, useState } from 'react';
import { StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MovieSlider } from '../../data/MovieSliderData';


const Search = function Search(){
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    // const [fullData, setFullData] = useState([]);
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = useCallback((text: string)=>{
        setSearchText(text);
       MovieSlider.map((item) => {
           if(item.title.toLowerCase().includes(text.toLowerCase())){
                //return console.log(item.title);
           };
        });
    },[]);

    return(
       <TextInput
       placeholder="Search..."
       style= {styles.searchBox}
       autoCapitalize="none"
       autoCorrect={false}
       onChangeText={(text)=> handleSearch(text)}/>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchBox:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 20,

    },
});
