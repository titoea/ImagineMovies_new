import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SearchIcon } from '../Icons/Icons';


const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={'white'}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <SearchIcon size={20} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
  },
  textInput: {
    width: '90%',
    fontFamily: 'AcuminRPro',
    fontSize: 14,
    color:'white',
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default InputHeader;
