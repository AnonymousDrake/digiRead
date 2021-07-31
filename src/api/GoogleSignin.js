import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, OAUTH_URL, SCOPES } from '../../envi/environment';

GoogleSignin.configure({
  webClientId: CLIENT_ID,
  scopes: SCOPES,
  offlineAccess: true,
});

export const requestFirstAccessToken = (code) => {
  const instance = axios.create({
    baseURL: OAUTH_URL,
    params: {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      access_type: "offline",
      grant_type: "authorization_code",
    }
  })
  return instance;
}

export default GoogleSignin;
