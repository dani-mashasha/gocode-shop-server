import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
    padding: "10px",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    maxWidth: "100%",
  },
  registerForm: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    maxWidth: "70%",
    margin: "auto",
  },
  button: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
  },
}));

const LoginForm = () => {
  const [isNewMember, setIsNewMember] = useState(false);
  const [newUser, seNewtUser] = useState({});

  const classes = useStyles();

  const handleChange = (event) => {
    const { id, value } = event.target;
    seNewtUser((prevUser) => {
      return {
        ...prevUser,
        [id]: value,
      };
    });
  };

  const handleClick = () => {
    setIsNewMember(true);
  };

  return (
    <div>
      {!isNewMember ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <form className={classes.loginForm}>
              <h1 className={classes.headline}>Already a member</h1>

              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <Button
                className={classes.button}
                variant="contained"
                color={"primary"}
              >
                Login
              </Button>
            </form>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "center", padding: "50px" }}
          >
            <h1 className={classes.headline}>Create an account</h1>
            <Button
              className={classes.button}
              variant="contained"
              color={"primary"}
              onClick={handleClick}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <form className={classes.registerForm}>
              <h1 className={classes.headline}>Create an account</h1>
              <TextField
                id="firsName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                id="lastName"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
              />

              <TextField
                id="email"
                label="Email"
                type="email"
                variant="standard"
                onChange={handleChange}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={handleChange}
              />

              <TextField
                id="address"
                label="Address"
                variant="standard"
                onChange={handleChange}
              />

              <Button
                className={classes.button}
                variant="contained"
                color={"primary"}
                onClick={() => console.log(newUser)}
              >
                Sign Up
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default LoginForm;
