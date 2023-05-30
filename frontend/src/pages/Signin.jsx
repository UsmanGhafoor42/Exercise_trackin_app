import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";



const theme = createTheme();

export default function SignInSide() {
  const [post, setPost] = useState([]);
  const [formState, setFormState] = useState("login");
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  // const handleChange = (e) => {
  //   setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const handleInput = (event) => {
  //   const name = event.target.name;

  //   const value = event.target.value;

  //   setValue((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };
  // React.useEffect(() => {
  //   allData()
  // }, []);

  let allData = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:5000/users')
      setPost(data);
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data)


    const handleSubmitOnClick = async () => {
      try {
        const {
          status,
          data: { accessToken },
        } = await axios.post(`http://127.0.0.1:3000/api/auth/${formState}`, data);
        console.log()
        if (status === 200) {
          localStorage.setItem("accessToken", accessToken);
          // localStorage.setItem("RefreshToken", refreshToken);
          // navigate("/dashboard");
          location.replace("/dashboard");
        }
      } catch (err) {
        alert(err.message);
      }
    };


    handleSubmitOnClick()
  };
 // disable space key
 const handleKeyDown = (event) => {
  if (event.keyCode === 32) {
    // Check for space key (key code 32)
    event.preventDefault(); // Cancel the event
  }
};
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(./images/login.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <img src="./images/logo.png"></img>
            </Avatar>
            <Typography component="h1" variant="h5">
              Exercise Tracker App
            </Typography>

            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                autoComplete="email"
                autoFocus
                // ... other props
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                error={!!errors.email}
                helperText={errors.email && "Email is required"}
                onKeyDown={handleKeyDown}
              />
              <TextField
                margin="normal"
                required
                fullWidth

                // name="password"
                // value={value.password}
                // onChange={handleChange}

                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // ... other props
                {...register("password", { required: true })}
                error={!!errors.password}
                helperText={errors.password && "Password is required"}
                onKeyDown={handleKeyDown}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#000000" }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
