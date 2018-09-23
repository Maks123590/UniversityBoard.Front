import axios from 'axios';
import BaseUrl from '../constants/constants';

const instance = axios.create({
  baseURL: BaseUrl,
  headers: {
    post: { 'Content-Type': 'application/json' },
    put: { 'Content-Type': 'application/json' },
  },
});


async function request(options) {
  try {
    const response = await instance(options);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }

    const data = await response;

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default request;
