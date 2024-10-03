import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {IButtonProps} from './interfaces';

const Button: IButtonProps = function Button({children, onPress, style}) {
  return (
    <View style={[style, styles.rootContainer]}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#D9C14A',
    opacity: 1,
    borderRadius: 20,
    padding: 10,
    width: 290,
  },
  text: {
    textAlign: 'center',
  },
});
