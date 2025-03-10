import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NowShowingSlider from '../../components/Slider/NowShowingSlider';
import Search from '../../components/Search/Search';
import ComingSoonSlider from '../../components/Slider/ComingSoonSlider';
import { IHomeProps } from './interfaces';


const Home :IHomeProps = function Home({navigation}) {
  return (
    <ScrollView>
      <View>
        <Search/>
      </View>
      <Text style={styles.headerText}>NOW SHOWING</Text>
      <View>
       <NowShowingSlider/>
      </View>
      <Text style= {styles.headerText}> COMING SOON</Text>
      <View>
        <ComingSoonSlider/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerText:{
    fontFamily: 'AcuminBdPro',
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 13,
  },
});
