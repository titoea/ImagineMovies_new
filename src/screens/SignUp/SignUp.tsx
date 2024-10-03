import React, {useCallback} from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button/Button';
import CustomTextInput from '../../components/CustomTextInput/TextInput';
import {ISignUpProps} from './interfaces';

const SignUp: ISignUpProps = function SignUp({navigation}) {
  const background_image = require('../../assets/images/background-img.jpg');

  const handleLoginPress = useCallback(() => {
    navigation.navigate('LogIn');
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={background_image} style={styles.imageContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.SignUpText}>SIGN UP</Text>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>NAME</Text>
            <CustomTextInput
              style={styles.textInputLabel}
              placeholder="Enter your name"
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>EMAIL</Text>
            <CustomTextInput
              style={styles.textInputLabel}
              placeholder="Enter your email"
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>PASSWORD</Text>
            <CustomTextInput
              style={styles.textInputLabel}
              placeholder="Enter your password"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonStyle}>Sign Up</Button>
          <View style={styles.logInPromptContainer}>
            <Text style={styles.logInPromptText}>
              Already have an account?{' '}
            </Text>
            <Pressable onPress={handleLoginPress}>
              <Text style={styles.logInText}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  formContainer: {
    marginTop: 242,
    backgroundColor: 'rgba(22, 24, 25, 0.3)',
    padding: 16,
    marginBottom: 50,
  },
  SignUpText: {
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
    alignItems: 'center',
  },
  buttonStyle: {
    marginBottom: 15,
  },
  logInPromptContainer: {
    flexDirection: 'row',
  },
  logInPromptText: {
    color: '#DCDCDC',
  },
  logInText: {
    color: '#40E2FF',
    textDecorationLine: 'underline',
  },
});
