/* eslint linebreak-style: ["error", "windows"] */
import axios from 'axios';

const resource = 'http://jsonplaceholder.typicode.com/';
export const HTTPCALL = axios.create({
  baseURL: resource,
});
