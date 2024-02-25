import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Login from "../pages/Login";
import Register from "../pages/Register";

const LoginRegisterDialog = ({ open, onClose }) => {
  const [dialogType, setDialogType] = useState("login");
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          {dialogType === "login" ? (
            <Login register={() => setDialogType("register")} />
          ) : (
            <Register login={() => setDialogType("login")} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginRegisterDialog;
