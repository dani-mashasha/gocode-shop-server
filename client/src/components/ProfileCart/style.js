import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cartCard: {
    textAlign: "center",
    "& h1": {
      padding: "20px",
      color: "#00bfff",
    },
    "& h2": {
      margin: "20px",
    },
    "& li": {
      justifyContent: "center",
    },
  },
  profileCart: {
    maxHeight: "250px",
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      maxHeight: "none",

      height: "550px",
    },
  },
}));

export default useStyles;
