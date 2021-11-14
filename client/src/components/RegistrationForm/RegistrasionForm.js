import { Button, Card, Grid, makeStyles, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
    padding: "20px",
  },

  registerForm: {
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

const RegistrationForm = () => {
  const classes = useStyles();

  const [newUser, seNewtUser] = useState({});
  const { register } = useContext(AuthContext);
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

  async function onRegister(e) {
    e.preventDefault();
    await register(newUser);
    history.push("/");
  }

  return (
    <Card style={{ minHeight: "60vh" }}>
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

            <Button
              className={classes.button}
              variant="contained"
              color={"primary"}
              type="submit"
            >
              Register
            </Button>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
};

export default RegistrationForm;
