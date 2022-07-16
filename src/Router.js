import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import {startGetUser} from './actions';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SigninScreen from './screens/SigninScreen';
import LoadingScreen from './screens/LoadingScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import BookInfoScreen from './screens/BookInfoScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home_Main">
      <Stack.Screen component={HomeScreen} name="Home_Main" />
      <Stack.Screen
        component={SearchScreen}
        name="Search_Focus"
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        component={SearchResultScreen}
        name="Search_Result"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        component={BookInfoScreen}
        name="Book_Info"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

const Router = ({user, getUser}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    getUser();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#202124" />
      {loading ? (
        <LoadingScreen />
      ) : !user ? (
        <SigninScreen />
      ) : (
        <HomeNavigator />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  user: state.auth.uid,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(startGetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
