import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
const SubMovieCard = (props: any) => {
  return (
    <TouchableOpacity onPress={() => props.cardFunction()}>
      <View
        style={[
          styles.container,
          props.shoudlMarginatedAtEnd
            ? props.isFirst
              ? {marginLeft: 36}
              : props.isLast
              ? {marginRight: 36}
              : {}
            : {},
          props.shouldMarginatedAround ? {margin: 12} : {},
          {maxWidth: props.cardWidth},
        ]}>
        <Image
          style={[styles.cardImage, {width: props.cardWidth}]}
          source={{uri: props.imagePath}}
        />
        <Text numberOfLines={1} style={styles.textTitle}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'd0f0f4d',
  },
  cardImage: {
    aspectRatio: 2 / 3,
    borderRadius: 20,
  },
  textTitle: {
    fontFamily: 'AcuminRPro',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default SubMovieCard;
