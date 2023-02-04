import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import Navigation from "../../Navigation/Navigations";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminLogin.css";

const theme = createTheme();

export default function AdminLogin() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState([]);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  const emailChanage = (event) => {
    setEmailId(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginBody = {
      username: emailId,
      password: password,
    };

    axios
      .post("http://localhost:8092/admin-security-login", loginBody)
      .then((response) => {
        // console.log(response.data);
        sessionStorage.setItem("adminLogin", response.data.token);
        alert("Welcome Admin");
        navigate("/admin-news-feed");
      })
      .catch((error) => {
        alert("Inavlid credentials.");
      });
    // let found = adminData.find((element) => element.emailId == emailId);
    // if (found == undefined) {
    //   alert("Invalid Credentials");
    // } else {
    //   if (found.emailId == emailId && found.password == password) {
    //     alert("Login Successful");
    //     localStorage.setItem("admin", JSON.stringify(found));
    //     navigate("/admin-news-feed");
    //   } else {
    //     alert("Credentials are not found");
    //   }
    // }

    let found = adminData.find((element) => element.emailId == emailId);
    localStorage.setItem("admin", JSON.stringify(found));
  };

  useEffect(() => {
    axios.get("http://localhost:8086/admins").then((response) => {
      setAdminData(response.data);
    });
  }, []);

  return (
    <div className="admin-img">
      <Navigation />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="login-admin">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              style={{ backgroundColor: "#AE275F" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                autoFocus
                onChange={emailChanage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // autoComplete="current-password"
                onChange={passwordChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                id="btnlogin"
                style={{ backgroundColor: "#AE275F" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ArrowBackIosNewTwoToneIcon /> Home
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <footer className="copyrightfooter">
        <p> Copyright &#169; By Axis Batch 9 </p>
      </footer>
    </div>
  );
}
