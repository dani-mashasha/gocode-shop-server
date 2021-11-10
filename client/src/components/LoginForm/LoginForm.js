import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
    padding: "10px",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    margin: "auto",
  },
  registerForm: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
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
  const classes = useStyles();

  const [isNewMember, setIsNewMember] = useState(false);
  const [newUser, seNewtUser] = useState({});
  const { loggedIn, getLoggedIn, register, login } = useContext(AuthContext);
  const history = useHistory();

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
    setIsNewMember((prev) => !prev);
    seNewtUser({});
  };

  async function onRegister(e) {
    e.preventDefault();
    await register(newUser);
    history.push("/");
  }
  async function onLogin(e) {
    e.preventDefault();
    await login(newUser);
    console.log(newUser);

    history.push("/");
  }

  // async function register(e) {
  //   e.preventDefault();
  //   try {
  //     const registerData = newUser;
  //     console.log(registerData);
  //     await axios.post("/api/auth", registerData);
  //     await getLoggedIn();
  //     history.push("/");
  //     console.log(history);
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }
  // async function login(e) {
  //   e.preventDefault();
  //   try {
  //     const loginData = newUser;
  //     await axios.post("/api/auth/login", loginData);
  //     await getLoggedIn();
  //     history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }

  return (
    <Card>
      {!isNewMember ? (
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <form onSubmit={onLogin} className={classes.loginForm}>
              <h1 className={classes.headline}>Already a member</h1>

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
              <ButtonGroup disableElevation variant="contained">
                <Button
                  className={classes.button}
                  variant="contained"
                  color={"primary"}
                  type="submit"
                >
                  Log in
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color={"secondery"}
                  onClick={handleClick}
                >
                  Or Register
                </Button>
              </ButtonGroup>
            </form>
          </Grid>
        </Grid>
      ) : (
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <form onSubmit={onRegister} className={classes.registerForm}>
              <h1 className={classes.headline}>Create an account</h1>
              <TextField
                id="userName"
                label="User Name"
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
                id="passwordVerify"
                label="Verify Password"
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
              <ButtonGroup disableElevation variant="contained">
                <Button
                  className={classes.button}
                  variant="contained"
                  color={"secondery "}
                  onClick={handleClick}
                >
                  Or Log in
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color={"primary"}
                  type="submit"
                >
                  Register
                </Button>
              </ButtonGroup>
            </form>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};

export default LoginForm;
