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
import { useState } from "react";

{
  /* <Grid
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
</Grid> */
}

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

  const handleChange = (event) => {
    const { id, value } = event.target;
    seNewtUser((prevUser) => {
      return {
        ...prevUser,
        [id]: value,
      };
    });
    console.log(newUser);
  };

  const handleClick = () => {
    setIsNewMember((prev) => !prev);
    seNewtUser({});
  };

  async function register(e) {
    e.preventDefault();
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async function login(e) {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <Card>
      {!isNewMember ? (
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <form onSubmit={login} className={classes.loginForm}>
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
                  Register
                </Button>
              </ButtonGroup>
            </form>
          </Grid>
        </Grid>
      ) : (
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <form onSubmit={register} className={classes.registerForm}>
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
                  Log in
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
