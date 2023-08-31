import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {users} from "../Loki";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";


const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const {setCurrentUser} = useContext(UserContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    const user = users.findOne({email})
    if (user && user.password === password) {
      setCurrentUser(user);
      navigate("/Home");
    } else {
      alert("Username or password is wrong");
    }

  }
    

  return (
    <div style={{
      backgroundColor: "rgba(255, 255, 255, .93)",
      margin: "10%",
      padding: 5,
      marginLeft: "20%",   
      marginRight: "20%", 
      
    }}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              autoComplete="email"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"

              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
              dont have an account?
                <button
                  color="secondary"
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                   sign up
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" paddingTop={5}>
        ajith
        © {new Date().getFullYear()}  All Rights Reserved.
      </Typography>
      </Container>
    </ThemeProvider>
   </div>
  );
}
