import { Grid } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm.js";
import RegistrationForm from "../components/RegistrationForm/RegistrasionForm.js";

function LoginPage() {
  const [alignment, setAlignment] = useState("login");

  const handleChange = (event) => {
    const newAlignment = event.target.value;
    setAlignment(newAlignment);
  };
  return (
    <div className={"page"}>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <ToggleButtonGroup
            color="primary"
            style={{}}
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="login">Log in</ToggleButton>
            <ToggleButton value="register">Register</ToggleButton>
          </ToggleButtonGroup>
          {alignment === "login" && <LoginForm />}
          {alignment === "register" && <RegistrationForm />}
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
