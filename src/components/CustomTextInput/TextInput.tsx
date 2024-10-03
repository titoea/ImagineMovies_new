import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ICustomTextInputProps} from './interfaces';

const CustomTextInput: ICustomTextInputProps = function CustomTextInput({
  ...props
}) {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={[props.style, styles.inputContainer]}
        placeholderTextColor="rgba(220, 220, 220, 0.45)"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 20,
    width: 290,
    height: 36,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'black',
    shadowColor: 'rgba(13, 15, 15, 0.20)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
