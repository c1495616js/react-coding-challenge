import axios from 'axios';
import Config from '../../config';
import { API_ACCESS_TOKEN } from './const';

export const client = axios.create({
  baseURL: Config.api.baseUrl,
});

export const authorizedHeader = (header = { Authorization: '' }) => {
  header.Authorization =
    'Bearer ' + localStorage.getItem(API_ACCESS_TOKEN) || undefined;
  return header;
};

export const AUTH_REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${Config.api.clientId}&response_type=token&redirect_uri=${Config.api.redirectUri}`;
