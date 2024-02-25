import PersonIcon from "@mui/icons-material/Person";
import { Snackbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ login }) => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username = data.get("username");
    let password = data.get("password");
    if (!username || !password) return;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExistingUser = existingUsers.some(
      (user) => user.username === username
    );
    if (isExistingUser) {
      setSnackbarMessage("Username already exists");
      setOpenSnackbar(true);

      return;
    }
    const newUser = {
      username,
      userId: Math.floor(Math.random() * 1000),
      password,
    };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSnackbarMessage("User registered successfully");
    setOpenSnackbar(true);
    login();
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link onClick={login} sx={{ cursor: "pointer" }} variant="body2">
              Already have an account? Login
            </Link>
          </div>
        </Box>
      </Box>
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
    </Container>
  );
};
export default Register;
