import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import LoginRegisterDialog from "./LoginRegisterDialog";

const Header = () => {
  //   const { setUserInfo, userInfo } = useContext(UserContext);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const username = null;

  //   const getUserProfile = async () => {
  //     try {
  //       const response = await fetch(backend_url + "userProfile", {
  //         credentials: "include",
  //       });

  //       if (response.ok) {
  //         const userInfo = await response.json();
  //         setUserInfo(userInfo);
  //       } else {
  //         console.error("Failed to fetch user profile:", response);
  //       }
  //     } catch (error) {
  //       console.error("An error occurred while fetching user profile:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getUserProfile();
  //   }, []);

  return (
    <header className="header">
      <Typography component="h1" variant="h5">
        Authenticated Nested Comment System
      </Typography>
      <nav className="flex gap-8">
        {username && (
          <>
            <button onClick={() => setOpenLogoutModal(true)}>Logout</button>
          </>
        )}
        {!username && (
          <>
            <Button onClick={() => setOpenLoginModal(true)}>
              Login / Register
            </Button>
          </>
        )}
      </nav>
      {openLoginModal && (
        <LoginRegisterDialog
          open={openLoginModal}
          onClose={() => setOpenLoginModal(false)}
        />
      )}
      {openLogoutModal && (
        <Logout
          onOpen={openLogoutModal}
          onClose={() => setOpenLogoutModal(false)}
        />
      )}
    </header>
  );
};

export default Header;
