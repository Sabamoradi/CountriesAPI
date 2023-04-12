/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

const resource = 'https://restcountries.com/v3.1/';
export const HTTPCALL = axios.create({
  baseURL: resource,
});
