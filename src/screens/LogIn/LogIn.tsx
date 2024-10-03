import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import CustomTextInput from '../../components/CustomTextInput/TextInput';
import CheckBox from '@react-native-community/checkbox';
import {ILogInProps} from './interfaces';
import {CommonActions} from '@react-navigation/native';

const LogIn: ILogInProps = function LogIn({navigation}) {
  const background_image = require('../../assets/images/background-img.jpg');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={background_image} style={styles.imageContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.LogInText}>LOG IN</Text>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>EMAIL</Text>
            <CustomTextInput
              style={styles.textInputLabel}
              placeholder="Enter your email"
            />
          </View>
          {/* eslint-disable-next-line react-native/no-inline-styles*/}
          <View style={{marginBottom: 11}}>
            <Text style={styles.textInputLabel}>PASSWORD</Text>
            <CustomTextInput
              style={styles.textInputLabel}
              placeholder="Enter your password"
            />
          </View>
          <View style={styles.endActionsStyle}>
            <View style={styles.checkBoxStyle}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                boxType="square"
                tintColor="#161819"
                onFillColor="#161819"
                onTintColor="#161819"
                onCheckColor="#D9C14A"
                tintColors={{true: '#161819', false: '#161819'}}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'Home'}],
                }),
              );
            }}
            style={styles.buttonStyle}>
            Log In
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 3,
    marginTop: 242,
    backgroundColor: 'rgba(22, 24, 25, 0.3)',
    padding: 16,
    marginBottom: 50,
  },
  LogInText: {
    marginTop: 28,
    textAlign: 'center',
    color: '#DCDCDC',
    fontFamily: 'AcuminBdPro',
    fontSize: 24,
    marginBottom: 17,
  },
  textInputContainer: {
    marginBottom: 26,
  },
  textInputLabel: {
    color: '#DCDCDC',
    fontFamily: 'AcuminBdPro',
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 3,
  },
  textInputStyle: {
    marginHorizontal: 30,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
  },
  buttonStyle: {
    marginBottom: 15,
  },
  forgotPasswordText: {
    flex: 2,
    color: '#DCDCDC',
  },
  endActionsStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  checkBoxStyle: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 30,
  },
  rememberMeText: {
    marginLeft: 5,
    color: '#DCDCDC',
  },
});
