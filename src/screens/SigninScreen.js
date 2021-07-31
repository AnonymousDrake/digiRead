import React from 'react';
import { View, Image, StyleSheet, Alert, Text } from 'react-native';
import { connect } from 'react-redux';
import { GoogleSigninButton as Button } from '@react-native-google-signin/google-signin';
import { startLogin } from '../actions/auth';

const SigninScreen = ({ signin, loading, error }) => {
  const startSignin = () => {
    signin();
  }

  if (error != null) {
    Alert.alert("Error", error, [
      {
        text: "Retry",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.text}>DigiRead</Text>
      </View>
      <Button
        size={Button.Size.Wide}
        onPress={() => startSignin()}
        disabled={!!loading}
        color={Button.Color.Light}
        style={styles.buttonContainer}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  imageContainer: {
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 180,
  }
})

const mapStateToProps = (state) => ({
  loading: state.auth.authLoading,
  error: state.auth.authError,
})

const mapDispatchToProps = (dispatch) => ({
  signin: () => dispatch(startLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);