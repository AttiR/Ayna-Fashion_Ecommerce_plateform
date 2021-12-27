import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  // redux-thunk

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    // we are sending data into headers

    const config = {
      Headers: {
        'content-Type': 'Application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      { config }
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // storage data in local storage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message, // ternary operator if else
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: USER_LOGOUT,
  });
};

// Registration
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}