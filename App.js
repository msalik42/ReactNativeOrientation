/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

class App extends Component {
  componentDidMount(){
    Orientation.lockToLandscape();
    setTimeout(()=>{
      Orientation.lockToPortrait();
    }, 3000)
  }
  render() {
    return (
      <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
        <Text>Hello World</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
