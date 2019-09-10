import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from './types';
import axios from 'axios';
import { domain } from '../domain';
export const register = (
  first_name,
  last_name,
  email,
  password,
  history
) => async dispatch => {
  try {
    const data = JSON.stringify({
      first_name,
      last_name,
      email,
      password
    });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(domain + '/auth/signup', data, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data.token
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error
    });
  }
};
export const login = (email, password, history) => async dispatch => {
  try {
    const data = JSON.stringify({
      email,
      password
    });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(domain + '/auth/signin', data, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data.token
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    });
  }
};
