import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Section from '../components/Section';
import HomeScreenHeader from '../components/HomeScreenHeader';
import {startUserLogout, startGetMyBooks, startGetHomeScreen} from '../actions';
import LoadingBarFull from '../components/LoadingBarFull';

const HomeScreen = ({
  navigation,
  firstName,
  lastName,
  userAvatar,
  userEmail,
  startLogout,
  data,
  fetchBookshelf,
  fetchHomeScreen,
  loading,
}) => {
  useEffect(() => fetchHomeScreen(), []);

  const onBookPress = (index, category) => {
    navigation.navigate('Book_Info', {
      index,
      category,
      prevScreen: 'Home_Main',
    });
  };

  return (
    <View style={styles.container}>
      <HomeScreenHeader
        userName={firstName + ' ' + lastName}
        userAvatar={userAvatar}
        userEmail={userEmail}
        onFocus={() =>
          navigation.navigate('Search_Focus', {previousScreen: 'Home_Main'})
        }
        startLogout={startLogout}
      />
      {loading ? (
        <LoadingBarFull />
      ) : (
        <Section
          data={data}
          fetchData={fetchBookshelf}
          onBookPress={onBookPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
});

const mapStateToProps = state => ({
  user: state.auth.uid,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName ? state.auth.lastName : '',
  userAvatar: state.auth.photo,
  userEmail: state.auth.userEmail,
  data: state.books.data,
  loading: state.books.loading,
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startUserLogout()),
  fetchBookshelf: (id, startIndex) => dispatch(startGetMyBooks(id, startIndex)),
  fetchHomeScreen: () => dispatch(startGetHomeScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
