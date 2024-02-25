import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setOpenLoginDialog } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <header className="header">
      <Typography component="h1" variant="h5">
        Authenticated Nested Comment System
      </Typography>
      <nav>
        {user && (
          <>
            <Button onClick={() => dispatch(clearUser())}>
              Logout ({user?.username})
            </Button>
          </>
        )}
        {!user && (
          <>
            <Button onClick={() => dispatch(setOpenLoginDialog(true))}>
              Login / Register
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
