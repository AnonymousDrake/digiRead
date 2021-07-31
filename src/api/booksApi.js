import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY, BOOKS_URL } from '../../envi/environment';

export const bookshelfGetConfiguration = async (startIndex) => {
  const accessToken = await AsyncStorage.getItem("access_token");

  const instance = axios.create({
    baseURL: BOOKS_URL,
    params: {
      "key": API_KEY,
      "startIndex": startIndex,
      "maxResults": 5,
    },
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  })

  return instance;
}

export const bookshelfEditConfiguration = async (bookId) => {
  const accessToken = await AsyncStorage.getItem("access_token");
  const instance = axios.create({
    baseURL: BOOKS_URL,
    params: {
      "key": API_KEY,
      "volumeId": bookId,
    },
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  })

  return instance;
}