import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingBarFull = () => {
  return (
    <View style={styles.modalContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingBarFull;
