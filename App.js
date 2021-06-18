import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer></NavigationContainer>
    <Fragment>
      <StatusBar backgroundColor={'#ff9100'} translucent={true} style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>Test SJ</Text>
        <StatusBar style="auto" />
      </View>
    </Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
