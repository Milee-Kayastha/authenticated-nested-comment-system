import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { Snackbar } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { setOpenLoginDialog } from "../store/userSlice";

const LoginRegisterDialog = () => {
  const open = useSelector((state) => state.user.openLoginDialog);
  const dispatch = useDispatch();
  const [dialogType, setDialogType] = useState("login");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleClose = () => {
    dispatch(setOpenLoginDialog(false));
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {dialogType === "login" ? (
            <Login
              register={() => setDialogType("register")}
              setOpenSnackbar={setOpenSnackbar}
              setSnackbarMessage={setSnackbarMessage}
            />
          ) : (
            <Register
              login={() => setDialogType("login")}
              setOpenSnackbar={setOpenSnackbar}
              setSnackbarMessage={setSnackbarMessage}
            />
          )}
        </DialogContent>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        ContentProps={{
          style: {
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default LoginRegisterDialog;
