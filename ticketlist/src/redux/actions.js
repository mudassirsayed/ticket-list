import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const getDeleteUser = () => ({
  type: types.DELETE_USER,
});

const postAddUser = () => ({
  type: types.ADD_USER,
});

const getSingleUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const getUpdatedUser = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data.users));
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getDeleteUser());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(postAddUser());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(getSingleUser(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        dispatch(getUpdatedUser());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
