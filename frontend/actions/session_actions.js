export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import * as APIUtil from '../util/session_api_util';

export const logIn = (user) => {
  return (dispatch) => {
    APIUtil.logIn(user).then( (user) => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logOut = () => {
  return (dispatch) => {
    APIUtil.logOut().then( () => dispatch(logoutCurrentUser()));
  };
};


export const signUp = (user) => {
  return (dispatch) => {
    APIUtil.signUp(user).then( (user) => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
