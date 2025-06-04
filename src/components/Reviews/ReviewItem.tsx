import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import { IReviewItemProps } from './interfaces';
import { AvatarIcon } from '../Icons/Icons';


const ReviewItem : IReviewItemProps = function ReviewItem({item}) {
   // const imageBaseURL = 'https://image.tmdb.org';
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                {/*<Image source={{
            uri: `${imageBaseURL} + '/t/p/w50' + ${item.authorDetails ? item.authorDetails.avatar_path : ''}`,
            }}style={styles.image}/> */}
            <AvatarIcon/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.author}>{item.author}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Text>{item.authorDetails?.rating}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderBottomWidth: 5,
        flexDirection: 'row',
        marginBottom: 15,
    },
    imageContainer:{
        flex: 1,
    },
    contentContainer: {
        flex: 5,
    },
    image: {
        width: 100,
        height: 100,
    },
    content: {
        fontFamily: 'BebasNeue-Regular',
        fontSize: 16,
        fontWeight: "400",
    },
    author: {
         fontFamily: 'BebasNeue-Regular',
        fontSize: 20,
        fontWeight: "400",
    },
});
