import { combineReducers } from "redux";
import lang from "../Lang/LangReducer";
import loader from "../Loader/LoaderReducer";
import snackbar from "../Snackbar/SnackbarReducer";
import loginStatus from "../Login/LoginStatusReducer";
export default combineReducers({
  lang,
  loader,
  snackbar,
  loginStatus,
});
