import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from './types';
import axios from 'axios';
import { domain } from '../domain';
import { setAlert } from './alert';
export const register = (
  first_name,
  last_name,
  email,
  password
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
    dispatch(setAlert('Registration was successful', 'success'));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error
    });

    dispatch(setAlert('Registration error', 'danger'));
  }
};
export const login = (email, password) => async dispatch => {
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
    dispatch(setAlert('Login was successful', 'success'));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    });
    dispatch(setAlert('Login error', 'danger'));
  }
};
