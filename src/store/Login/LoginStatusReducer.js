import * as types from "./LoginStatusTypes";

const INITIAL_STATE = localStorage.getItem("loginStatus") || null;

export default function loginStatus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_LOGIN_STATUS:
      return action.payload;
    case types.GET_LOGIN_STATUS:
      return action.payload;
    default:
      return state;
  }
}
