import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbarAction } from "../../store/Snackbar/SnackbarAction";

function AlertBox(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export function MaterialSnackbar(props) {
  const { isOpen, message, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideSnackbarAction());
  };
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={`bottom,center`}
      onClose={() => handleClose}
    >
      <AlertBox onClose={handleClose} severity={type} className="medium_font">
        {message}
      </AlertBox>
    </Snackbar>
  );
}
