import axios from 'axios';
import { API_KEY, SEARCH_URL } from '../../envi/environment';

const base_url = SEARCH_URL;
const api_key = API_KEY;

const instance = axios.create({
  baseURL: base_url,
  params: {
    key: api_key,
    maxResults: 40,
  }
})

export default instance;