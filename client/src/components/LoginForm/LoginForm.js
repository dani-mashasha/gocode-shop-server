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
import { Alert } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
    padding: "20px",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "20px",
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
  const [newUser, seNewtUser] = useState({});
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

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

  async function onLogin(e) {
    e.preventDefault();
    const message = await login(newUser);
    if (message) {
      setErrorMessage(message.response.data);
    } else {
      setErrorMessage(null);

      history.push("/");
    }
  }

  return (
    <Card style={{ minHeight: "60vh" }}>
      {errorMessage && (
        <Alert severity="error" style={{ justifyContent: "center" }}>
          This is an error alert — {errorMessage.errorMessage}
        </Alert>
      )}
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
            <Button
              className={classes.button}
              variant="contained"
              color={"primary"}
              type="submit"
            >
              Log in
            </Button>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LoginForm;
