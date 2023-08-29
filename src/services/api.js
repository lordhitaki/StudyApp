import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.1.107:1337/api',
});
api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('Token');
  if (!token) return config;
  if (config?.headers) {
    config.headers = {Authorization: `Bearer ${token}`};
  }
  return config;
});
export default api;
