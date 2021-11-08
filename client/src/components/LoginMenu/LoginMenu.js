import * as React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function LoginMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}> Profile </MenuItem>
        </Link>

        <Link to="/admin" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Admin</MenuItem>
        </Link>

        {false ? <MenuItem>Logout</MenuItem> : <MenuItem>Login</MenuItem>}
      </Menu>
    </div>
  );
}
