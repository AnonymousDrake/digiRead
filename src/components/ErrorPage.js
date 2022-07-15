import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ErrorPage = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#999FA5',
    fontSize: 16,
  },
});

export default ErrorPage;
