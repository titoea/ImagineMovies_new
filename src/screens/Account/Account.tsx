import React, { useContext } from 'react';
import { IAccountProps } from './interfaces';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import UserContext from '../../providers/UserProvider/UserContext';

const Account:IAccountProps = function Account() {
    const {user} = useContext(UserContext);
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.personalInfoText}>Personal Info</Text>
                <Image source={require('../../assets/images/jane.png')}/>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.infoContainer}>
                <Text style={styles.labelText}>Full Name</Text>
                <Text style={styles.formText}>{user.displayName || 'Tito Effiong-Akpan'}</Text>
                </View>
                <View style={styles.infoContainer}>
                <Text style={styles.labelText}>Email</Text>
                <Text style={styles.formText}>{user.email || 'otito@gmail.com'}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    headerContainer:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    personalInfoText: {
        marginVertical: 20,
        color: 'white',
        fontFamily: 'AcuminBdPro',
        fontSize: 20,
    },
    formContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    infoContainer:{
        flexDirection: 'column',
        marginBottom: 10,
    },
    formText:{
        color: 'white',
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        fontSize: 18,
    },
    labelText:{
        marginBottom: 10,
        color: 'white',
        fontSize: 18,
    },
});
