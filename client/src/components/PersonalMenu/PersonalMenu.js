import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../contexts/CartContext.js";

export default function PersonalMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { loggedIn, logOut, isAdmin } = useContext(AuthContext);
  const { resetCart } = useContext(CartContext);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function onLogOut() {
    await logOut();
    resetCart();
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
        style={{ top: "30px", left: "-40px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {isAdmin && (
          <MenuItem onClick={handleClose} component={Link} to={"/admin"}>
            Admin
          </MenuItem>
        )}
        {loggedIn && (
          <MenuItem onClick={handleClose} component={Link} to={"/profile"}>
            {" "}
            Profile{" "}
          </MenuItem>
        )}

        {loggedIn ? (
          <div onClick={onLogOut}>
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleClose} component={Link} to={"/login"}>
            Log in
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
