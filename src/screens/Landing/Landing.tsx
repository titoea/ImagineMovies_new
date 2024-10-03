import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Button from '../../components/Button/Button';
import {ILandingProps} from './interfaces';

const Landing: ILandingProps = function Landing({navigation}) {
  const background_image = require('../../assets/images/background-img.jpg');
  return (
    <View style={styles.rootContainer}>
      <ImageBackground source={background_image} style={styles.imageContainer}>
        <View style={styles.imageOverlay}>
          <View>
            <Text style={styles.appNameText}>Imagine Movies</Text>
          </View>
          <View>
            <Text style={styles.welcomeText}>WELCOME!</Text>
            <Text style={styles.captionText}>
              It's a pleasure to meet you. It's time to experience the big
              screen just how you imagined it!
            </Text>
          </View>
          <View>
            <Text style={styles.actionText}>LET'S GET YOU STARTED!</Text>
            <Button
              style={styles.button}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Next
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Landing;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  imageOverlay: {
    flex: 1,
    alignItems: 'center',
  },
  appNameText: {
    marginTop: 200,
    marginBottom: 40,
    color: '#D9C14A',
    fontFamily: 'PermanentMarker-Regular',
    fontSize: 32,
  },
  welcomeText: {
    marginBottom: 20,
    color: '#DCDCDC',
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
    fontSize: 48,
  },
  captionText: {
    marginBottom: 88,
    color: '#DCDCDC',
    textAlign: 'center',
    fontFamily: 'AcuminRPro',
    fontSize: 16,
    marginHorizontal: 40,
  },
  actionText: {
    marginBottom: 30,
    color: '#DCDCDC',
    textAlign: 'center',
    fontFamily: 'AcuminRPro',
    fontSize: 16,
  },
  button: {
    marginBottom: 28,
    fontFamily: 'AcuminRPro',
    fontSize: 16,
  },
});
