import React from "react";
import { useHistory } from "react-router-dom";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/Lang/LangAction";
import { setCurrentLoginStatus } from "../../store/Login/LoginStatusAction";
import { Link } from "react-router-dom";
import { Btn } from "../Controls/Button/Button";
import Auth from "../../utils/Auth";
import { connect } from "react-redux";

export default function Navbar() {
  const lang = useSelector((state) => state.lang);
  const loginStatus = useSelector((state) => state.loginStatus);
  const History = useHistory();
  const dispatch = useDispatch();

  const logOut = (loginstatus) => {
    Auth.signOut();
    dispatch(setCurrentLoginStatus(null));
    History.push(`/${lang}/login`);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">Pepsico</a>
        <div className="d-flex align-items-center">
          {loginStatus && <Btn handleClick={() => logOut()} text="Logout" />}
        </div>
      </nav>
    </>
  );
}
