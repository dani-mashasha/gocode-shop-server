import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

export default function LoginMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { loggedIn, logOut } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function onLogOut() {
    await logOut();
    history.push("/");
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <AccountCircleIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {loggedIn ? (
          <MenuItem onClick={handleClose} component={Link} to={"/profile"}>
            {" "}
            Profile{" "}
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleClose} component={Link} to={"/admin"}>
          Admin
        </MenuItem>

        {loggedIn ? (
          <div onClick={onLogOut}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleClose} component={Link} to={"/login"}>
            Login
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
