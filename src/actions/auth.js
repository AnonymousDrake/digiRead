import GoogleSignin, {requestFirstAccessToken} from '../api/GoogleSignin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = payload => ({
  type: 'LOGIN',
  payload,
});

const logout = () => ({
  type: 'LOGOUT',
});

const startLoading = () => ({
  type: 'LOADING_ON',
});

const authError = payload => ({
  type: 'ERROR',
  payload,
});

const updateUserInfo = payload => ({
  type: 'UPDATE_USER',
  payload,
});

export const startLogin = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const response = await GoogleSignin.signIn();
      const instance = requestFirstAccessToken(response.serverAuthCode);
      const oauthResponse = await instance.post('/token');
      dispatch(login({userDetails: response, userLogin: oauthResponse.data}));
      AsyncStorage.setItem('access_token', oauthResponse.data.access_token);
      AsyncStorage.setItem('uid', response.user.id);
    } catch (err) {
      console.log(err);
    }
  };
};

export const startUserLogout = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem('uid');
      await AsyncStorage.removeItem('access_token');
      await AsyncStorage.removeItem('refresh_token');
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
};

export const startGetUser = () => {
  return async dispatch => {
    try {
      dispatch(startLoading());
      const user = await AsyncStorage.getItem('uid');
      if (!!user) {
        const response = await GoogleSignin.getCurrentUser();
        dispatch(updateUserInfo(response.user));
      } else {
        dispatch(authError(undefined));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
