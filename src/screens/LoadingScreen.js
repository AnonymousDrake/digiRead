import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
    />

    <View style={styles.body}>
      <Text style={styles.title}>DigiRead</Text>
      <Text style={styles.subTitle}>Reading Books Made Easy!</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    paddingTop: 140,
  },
  body: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  logo: {
    height: 260,
    width: 240
  },
  title: {
    fontSize: 30,
    color: 'white',
    margin: 4,
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    margin: 4,
  },
});

export default LoadingScreen;
