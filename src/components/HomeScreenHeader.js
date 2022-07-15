import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import UserInfoModal from './UserInfoModal';

const HomeScreenHeader = ({
  userAvatar,
  userName,
  onFocus,
  userEmail,
  startLogout,
}) => {
  const [modalVisibility, setVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <UserInfoModal
        modalVisibility={modalVisibility}
        setVisibility={setVisibility}
        userName={userName}
        userAvatar={userAvatar}
        userEmail={userEmail}
        startLogout={startLogout}
      />
      <View style={styles.searchBox}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" size={18} color={'#999FA5'} />
        </View>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder={'Search Here'}
            onPressIn={onFocus}
            placeholderTextColor="#999FA5"
            style={styles.input}
            autoCapitalize="none"
            showSoftInputOnFocus={false}
          />
        </View>
        <View style={styles.userAvatarContainer}>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => setVisibility(true)}>
            <Image source={{uri: userAvatar}} style={styles.userAvatar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202124',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 2,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomColor: '#999fa5',
    borderBottomWidth: 0.2,
  },
  searchBox: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    flex: 1,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 48,
  },
  searchIconContainer: {
    paddingHorizontal: 14,
    height: '100%',
    justifyContent: 'center',
  },
  searchInputContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
  userAvatarContainer: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    height: '100%',
    width: 60,
    alignItems: 'center',
  },
  userAvatar: {
    borderRadius: 32,
    height: 32,
    width: 32,
    shadowColor: 'brown',
    borderWidth: 1,
  },
});

export default HomeScreenHeader;
