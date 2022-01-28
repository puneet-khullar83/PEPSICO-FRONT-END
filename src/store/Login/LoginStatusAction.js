import * as types from "./LoginStatusTypes";

export const setCurrentLoginStatus = (payload) => {
  localStorage.setItem("loginStatus", payload);
  return { type: types.SET_LOGIN_STATUS, payload };
};

export const getCurrentLoginStatus = () => {
  return { type: types.GET_LOGIN_STATUS };
};
